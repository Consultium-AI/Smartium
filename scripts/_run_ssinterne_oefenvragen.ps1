# Detached runner: genereert alle SSInterne oefenvragen (idempotent via --skip-existing).
# Via Start-Process losgekoppeld gestart zodat harness-lifecycle hem niet stopt.
Set-Location "C:\Users\Flash\Downloads\Smartium-main\Smartium-main"
$log = "ssinterne_oefenvragen_detached.log"
"START $(Get-Date -Format o)" | Out-File $log -Encoding utf8

& node scripts/generate-ssinterne-oefenvragen.mjs --all --skip-existing *>> $log

"DONE $(Get-Date -Format o)" | Out-File $log -Append -Encoding utf8
