#!/bin/bash


sed -i "s/YOUR_API_KEY/$(cat .env | grep API_KEY | cut -d= -f2)/g" index.html  # Replace index.html with your actual file names



echo "Website build complete!"