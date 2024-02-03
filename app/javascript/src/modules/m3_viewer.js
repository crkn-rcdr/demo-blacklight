'use strict';

import Mirador from 'mirador/dist/es/src/index.js';
import miradorImageToolsPlugin from 'mirador-image-tools/es/plugins/miradorImageToolsPlugin.js';
import miradorShareDialogPlugin from 'mirador-share-plugin/es/MiradorShareDialog.js';
import miradorSharePlugin from 'mirador-share-plugin/es/miradorSharePlugin.js';
import miradorDownloadPlugin from 'mirador-dl-plugin/es/miradorDownloadPlugin.js';
import miradorDownloadDialogPlugin from 'mirador-dl-plugin/es/MiradorDownloadDialog.js';
import shareMenuPlugin from '../plugins/shareMenuPlugin';
import miradorZoomBugPlugin from '../plugins/miradorZoomBugPlugin';
import embedModePlugin from '../plugins/embedModePlugin';
import analyticsPlugin from '../plugins/analyticsPlugin';
import cdlAuthPlugin from '../plugins/cdlAuthPlugin';

export {
  Mirador,
  miradorImageToolsPlugin
};