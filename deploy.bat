$ErrorActionPreference = 'SilentlyContinue'
type nul >> "out/.nojekyll"
git add out/ 
git commit -m "Deploy Next.js to remote"
git subtree push --prefix out origin gh-pages