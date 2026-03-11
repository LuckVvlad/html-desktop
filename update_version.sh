#!/bin/bash

# Extract the short git hash
VERSION=$(git rev-parse --short HEAD)

# Output the version so the user can see
echo "Updating index.html version to v$VERSION..."

# Use sed to replace the placeholder or previous version with the new one
# It looks for "v" followed by 7 alphanumeric characters inside the #appVersion div
sed -i -E "s/<div id=\"appVersion\"([^>]*)>\s*v[a-z0-9]{7}\s*<\/div>/<div id=\"appVersion\"\1>\n                    v$VERSION\n                <\/div>/g" index.html

echo "Done! Ready to commit."
