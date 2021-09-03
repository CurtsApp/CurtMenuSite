$ErrorActionPreference = 'SilentlyContinue'
type nul >> "out/.nojekyll"
git add out/ 
git commit -m "Deploy Next.js to remote"
::git subtree push --force --prefix out origin gh-pages
git push origin "git subtree split --prefix out master":gh-pages --force