# ============================================================
# Playwright + Allure - Clean Run Script
# Project: C:\Play_Test
# ============================================================

$ProjectPath = "C:\Play_Test"
$AllureResults = Join-Path $ProjectPath "allure-results"
$AllureBackup = Join-Path $ProjectPath "allure-history"
$AllureReport = Join-Path $ProjectPath "allure-report"

Write-Host ""
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host "   PLAYWRIGHT + ALLURE CLEAN TEST RUN" -ForegroundColor Cyan
Write-Host "============================================================" -ForegroundColor Cyan
Write-Host ""

# Go to project directory
Set-Location $ProjectPath

# ------------------------------------------------------------
# STEP 1 - Save old Allure results
# ------------------------------------------------------------

if (Test-Path $AllureResults) {

    $Timestamp = Get-Date -Format "yyyy-MM-dd_HH-mm-ss"
    $BackupFolder = Join-Path $AllureBackup $Timestamp

    Write-Host "[1/5] Saving old Allure results..." -ForegroundColor Yellow

    New-Item -ItemType Directory -Path $BackupFolder -Force | Out-Null

    Copy-Item "$AllureResults\*" $BackupFolder -Recurse -Force

    Write-Host "      Old results saved to:" -ForegroundColor Green
    Write-Host "      $BackupFolder" -ForegroundColor Green
}
else {
    Write-Host "[1/5] No old Allure results found." -ForegroundColor Yellow
}

# ------------------------------------------------------------
# STEP 2 - Clean Allure results
# ------------------------------------------------------------

Write-Host ""
Write-Host "[2/5] Cleaning old Allure results..." -ForegroundColor Yellow

if (Test-Path $AllureResults) {
    Remove-Item $AllureResults -Recurse -Force
}

New-Item -ItemType Directory -Path $AllureResults -Force | Out-Null

Write-Host "      allure-results is now CLEAN." -ForegroundColor Green

# ------------------------------------------------------------
# STEP 3 - Run ALL Playwright tests
# ------------------------------------------------------------

Write-Host ""
Write-Host "[3/5] Running ALL Playwright tests..." -ForegroundColor Yellow
Write-Host ""

npx playwright test

$TestExitCode = $LASTEXITCODE

Write-Host ""

if ($TestExitCode -ne 0) {
    Write-Host "WARNING: Some Playwright tests failed." -ForegroundColor Red
    Write-Host "Allure results will still be generated." -ForegroundColor Yellow
}
else {
    Write-Host "All Playwright tests completed successfully." -ForegroundColor Green
}

# ------------------------------------------------------------
# STEP 4 - Remove old generated Allure report
# ------------------------------------------------------------

Write-Host ""
Write-Host "[4/5] Removing previous Allure HTML report..." -ForegroundColor Yellow

if (Test-Path $AllureReport) {
    Remove-Item $AllureReport -Recurse -Force
}

Write-Host "      Old HTML report removed." -ForegroundColor Green

# ------------------------------------------------------------
# STEP 5 - Generate fresh Allure report
# ------------------------------------------------------------

Write-Host ""
Write-Host "[5/5] Generating fresh Allure report..." -ForegroundColor Yellow
Write-Host ""

allure generate $AllureResults -o $AllureReport –clean
allure open $AllureReport

if ($LASTEXITCODE -ne 0) {
    Write-Host ""
    Write-Host "ERROR: Allure report generation failed." -ForegroundColor Red
    Write-Host ""
    Pause
    exit 1
}

Write-Host ""
Write-Host "============================================================" -ForegroundColor Green
Write-Host "   ALLURE REPORT CREATED SUCCESSFULLY" -ForegroundColor Green
Write-Host "============================================================" -ForegroundColor Green
Write-Host ""
Write-Host "Fresh report:" -ForegroundColor Cyan
Write-Host "$AllureReport" -ForegroundColor White
Write-Host ""

Write-Host "Old results are safely stored under:" -ForegroundColor Cyan
Write-Host "$AllureBackup" -ForegroundColor White
Write-Host ""

# ------------------------------------------------------------
# Open the report
# ------------------------------------------------------------
# ------------------------------------------------------------ # Open Allure report automatically # ------------------------------------------------------------ Write-Host "" Write-Host "Opening Allure report..." -ForegroundColor Yellow Start-Process powershell.exe -ArgumentList ` "-NoExit", ` "-Command", ` "cd '$ProjectPath'; allure open '$AllureReport'"
