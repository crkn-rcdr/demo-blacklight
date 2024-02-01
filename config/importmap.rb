# Pin npm packages by running ./bin/importmap

pin "application"
pin "@hotwired/turbo-rails", to: "turbo.min.js"
pin "@hotwired/stimulus", to: "stimulus.min.js"
pin "@hotwired/stimulus-loading", to: "stimulus-loading.js"
pin_all_from "app/javascript/controllers", under: "controllers"
pin "@github/auto-complete-element", to: "https://cdn.skypack.dev/@github/auto-complete-element"
pin "@popperjs/core", to: "https://ga.jspm.io/npm:@popperjs/core@2.11.6/dist/umd/popper.min.js"
pin "bootstrap", to: "https://ga.jspm.io/npm:bootstrap@5.3.0/dist/js/bootstrap.js"
pin "jquery", to: "https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.js"
pin "htm", to: "https://cdnjs.cloudflare.com/ajax/libs/htm/3.1.1/htm.js"
pin "react", to: "https://cdnjs.cloudflare.com/ajax/libs/react/18.2.0/umd/react.production.min.js"
pin "react-dom", to: "https://cdnjs.cloudflare.com/ajax/libs/react-dom/18.2.0/umd/react-dom.production.min.js"
pin "mirador", to: "https://esm.sh/mirador@3.3.0"
#pin "@harvard-lts/mirador-pdiiif-plugin", to: "https://esm.sh/@harvard-lts/mirador-pdiiif-plugin@0.1.29"
pin_all_from "app/javascript/components", under: "components"
