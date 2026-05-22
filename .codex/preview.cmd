@echo off
cd /d C:\Users\15549\Documents\Codex\web-GY\my-site-static
echo Starting local preview at http://localhost:3000
echo Keep this window open while previewing.
"C:\Users\15549\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" "C:\Users\15549\Documents\Codex\web-GY\my-site-static\node_modules\next\dist\bin\next" dev -p 3000
echo.
echo Preview server stopped. Press any key to close.
pause >nul
