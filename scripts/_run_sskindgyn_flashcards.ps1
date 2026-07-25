# Detached runner: genereert alle SSKindgyn flashcards (layer 1 -> layer 2), idempotent via --skip-existing.
# Via Start-Process losgekoppeld gestart zodat harness-lifecycle hem niet stopt.
Set-Location "C:\Users\Flash\Downloads\Smartium-main\Smartium-main"
$log = "sskindgyn_flashcards_detached.log"
"START $(Get-Date -Format o)" | Out-File $log -Encoding utf8

"--- LAYER 1 ---" | Out-File $log -Append -Encoding utf8
& node scripts/generate-sskindgyn-flashcards.mjs --all --skip-existing *>> $log

"--- LAYER 2 ---" | Out-File $log -Append -Encoding utf8
& node scripts/review-sskindgyn-flashcards.mjs --all --skip-existing *>> $log

"DONE $(Get-Date -Format o)" | Out-File $log -Append -Encoding utf8
