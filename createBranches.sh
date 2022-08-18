branches=(
    travis
    paul
    jacob
)

for branch in ${branches[@]]; do
    git checkout -b $branch
    git push
done

