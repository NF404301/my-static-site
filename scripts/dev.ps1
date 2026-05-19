$ErrorActionPreference = "Stop"
Set-Location "C:\Users\15549\Documents\Codex\web-GY\my-site-static"
& "C:\Users\15549\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "node_modules\next\dist\bin\next" dev --hostname 127.0.0.1 --port 3000
