# Detached runner: genereert alle Blok 6 samenvattingen (idempotent via --skip-existing).
# Via Start-Process losgekoppeld gestart zodat harness-lifecycle hem niet stopt.
Set-Location "C:\Users\Flash\Downloads\Smartium-main\Smartium-main"
$log = "blok6_samenvattingen_detached.log"
"START $(Get-Date -Format o)" | Out-File $log -Encoding utf8

& node scripts/generate-blok6-samenvattingen.mjs --all --skip-existing *>> $log

"DONE $(Get-Date -Format o)" | Out-File $log -Append -Encoding utf8
