$ErrorActionPreference = 'SilentlyContinue'
type nul >> "out/.nojekyll"
git add out/ 
git commit -m "Deploy Next.js to remote"
::git subtree push --force --prefix out origin gh-pages
git subtree split --prefix dist -b gh-pages
git push -f origin gh-pages:gh-pages
git branch -D gh-pages