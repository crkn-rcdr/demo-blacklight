$:.unshift './config'
class MarcIndexer < Blacklight::Marc::Indexer
  # this mixin defines lambda factory method get_format for legacy marc formats
  include Blacklight::Marc::Indexer::Formats

  def initialize
    super

    settings do
      # type may be 'binary', 'xml', or 'json'
      provide "marc_source.type", "binary"
      # set this to be non-negative if threshold should be enforced
      provide 'solr_writer.max_skipped', -1
    end

    to_field "id", extract_marc("001"), trim, first_only
    to_field "is_issue",  extract_marc('001'), first_only do |rec, acc|
      if acc.count("_") > 2
        acc = "Yes"
      else
        acc = "No"
      end
    end


    to_field 'marc_ss', get_xml
    to_field "all_text_timv", extract_all_marc_values do |r, acc|
      acc.replace [acc.join(' ')] # turn it into a single string
    end

    to_field "language_ssim", marc_languages("008[35-37]:041a:041d:")
    to_field "format", get_format

    #Look into this
    #to_field "isbn_tsim", extract_marc('020a', separator: nil) do |rec, acc|
    #     orig = acc.dup
    #     # acc.map!{|x| StdNum::ISBN.allNormalizedValues(x)} # Can't handle 'x' assigned after by them~
    #     acc << orig
    #     acc.flatten!
    #     acc.uniq!
    #end

    to_field 'material_type_ssm', extract_marc('300a'), trim_punctuation

    # Title fields
    # get rid of / in title
    # 245 So, just keeping the $a and $b could work.

    # primary title 
    to_field 'title_tsim', extract_marc('245a')
    to_field 'title_ssm', extract_marc('245a', alternate_script: false), trim_punctuation
    to_field 'title_vern_ssm', extract_marc('245a', alternate_script: :only), trim_punctuation

    # subtitle
    to_field 'subtitle_tsim', extract_marc('245b')
    to_field 'subtitle_ssm', extract_marc('245b', alternate_script: false), trim_punctuation
    to_field 'subtitle_vern_ssm', extract_marc('245b', alternate_script: :only), trim_punctuation

    # Other Titles
    # Alternative Title - 246 field - right into the title or right below 
    # Uniform Title - Other title is in 830 field
    # 730, 740, 240, 242, 243, 247
    to_field 'title_addl_tsim',
      extract_marc(%W{
        246abcdefgnp
        240abcdefgklmnopqrs
        242abnp
        243abcdefgklmnopqrs
        247abcdefgnp
        730abcdefgklmnopqrst
        740anp
        830adfghklmnoprstvwxy
      }.join(':'))
    to_field 'title_si', marc_sortable_title

    # Author fields
    # Make author Creator -> 100, 110, 111, 130
    # Creator -> 700, 710, 711, 720
    to_field 'author_tsim', extract_marc("100abcegqu:110abcdegnu:111acdegjnqu:130#{ATOZ}:700abcegqu:710abcdegnu:711acdegjnqu:720#{ATOZ}")
    to_field 'author_ssm', extract_marc("100abcdq:110#{ATOZ}:111#{ATOZ}:130#{ATOZ}:700abcegqu:710abcdegnu:711acdegjnqu:720#{ATOZ}", alternate_script: false)
    to_field 'author_vern_ssm', extract_marc("100abcdq:110#{ATOZ}:111#{ATOZ}:130#{ATOZ}:700abcegqu:710abcdegnu:711acdegjnqu:720#{ATOZ}", alternate_script: :only)

    # JSTOR isn't an author. Try to not use it as one
    to_field 'author_si', marc_sortable_author

    # Subject fields
    to_field 'subject_tsim', extract_marc(%W(
      600#{ATOZ}
      610#{ATOZ}
      611#{ATOZ}
      630#{ATOZ}
      647#{ATOZ}
      648#{ATOZ}
      650#{ATOZ}
      651#{ATOZ}
      653#{ATOZ}
      654#{ATOZ}
      655#{ATOZ}
      656#{ATOZ}
      657#{ATOZ}
      658#{ATOZ}
      662#{ATOZ}
      688#{ATOZ}
    ).join(':'))

    to_field 'subject_ssim', extract_marc(%W(
      600#{ATOZ}
      610#{ATOZ}
      611#{ATOZ}
      630#{ATOZ}
      647#{ATOZ}
      648#{ATOZ}
      650#{ATOZ}
      651#{ATOZ}
      653#{ATOZ}
      654#{ATOZ}
      655#{ATOZ}
      656#{ATOZ}
      657#{ATOZ}
      658#{ATOZ}
      662#{ATOZ}
      688#{ATOZ}
    ).join(':')), trim_punctuation

    # Publication fields
    # Remove the accents from the string
    #remove_accent = lambda {|rec, acc| acc.map!{|x| 
    #  x = I18n.transliterate(x)
    #  x = x.tr('?', '')
    #  x = x.tr('[', '')
    #  x = x.tr(']', '')
    #  x = x.tr('.', '')
    #  x.tr(',', '')
    #} }

    # Published statement
    to_field 'published_ssm', extract_marc('260abcefg:264abc', alternate_script: false), trim_punctuation #remove_accent
    to_field 'published_vern_ssm', extract_marc('260abcefg:264abc', alternate_script: :only), trim_punctuation #remove_accent

    # Published Dated
    to_field 'pub_date_si', marc_publication_date
    to_field 'pub_date_ssim', marc_publication_date

    # Additional CRKN Information
    to_field 'collection_tsim', extract_marc('999a')

    # Document Source
    to_field 'doc_source_tsim', extract_marc('533abcdu')

    # Rights Statement
    to_field 'rights_stat_tsim', extract_marc('540abcdfgqu')
    
    # Access Note
    to_field 'access_note_tsim', extract_marc('506abcdefgqu')

    # Original Version Note 534 - physical item desc
    to_field 'original_version_note_tsim', extract_marc('534abcefklmnoptxz')

    # Notes
    to_field 'notes_tsim', extract_marc(%W(
      500#{ATOZ}
      515#{ATOZ}
      546#{ATOZ}
      588#{ATOZ}
    ).join(':'))

    # Series
    # CIHM don't need?? Need to ask Jason
    # Will need for issues
    to_field 'title_series_tsim', extract_marc("440anpv:490av")

    to_field 'permalink_fulltext_ssm', extract_marc("856g")

    # URL Fields
    notfulltext = /abstract|description|sample text|table of contents|/i
    to_field('url_fulltext_ssm') do |rec, acc|
      rec.fields('856').each do |f|
        case f.indicator2
        when '0'
          f.find_all{|sf| sf.code == 'u'}.each do |url|
            acc << url.value
          end
        when '2'
          # do nothing
        else
          z3 = [f['z'], f['3']].join(' ')
          unless notfulltext.match(z3)
            acc << f['u'] unless f['u'].nil?
          end
        end
      end
    end

    # Very similar to url_fulltext_display. Should DRY up.
    to_field 'url_suppl_ssm' do |rec, acc|
      rec.fields('856').each do |f|
        case f.indicator2
        when '2'
          f.find_all{|sf| sf.code == 'u'}.each do |url|
            acc << url.value
          end
        when '0'
          # do nothing
        else
          z3 = [f['z'], f['3']].join(' ')
          if notfulltext.match(z3)
            acc << f['u'] unless f['u'].nil?
          end
        end
      end
    end

    # Call Number fields
    to_field 'lc_callnum_ssm', extract_marc('050ab'), first_only

    first_letter = lambda {|rec, acc| acc.map!{|x| x[0]} }
    to_field 'lc_1letter_ssim', extract_marc('050ab'), first_only, first_letter, translation_map('callnumber_map')

    alpha_pat = /\A([A-Z]{1,3})\d.*\Z/
    alpha_only = lambda do |rec, acc|
      acc.map! do |x|
        (m = alpha_pat.match(x)) ? m[1] : nil
      end
      acc.compact! # eliminate nils
    end
    to_field 'lc_alpha_ssim', extract_marc('050a'), alpha_only, first_only 

    to_field 'lc_b4cutter_ssim', extract_marc('050a'), first_only

  end
end
