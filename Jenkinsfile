pipeline {
    agent any

    stages {

        stage('Install Dependencies') {
            steps {
                bat '''
                    echo ===== CURRENT DIRECTORY =====
                    cd

                    echo ===== INSTALLING DEPENDENCIES =====
                    npm install
                '''
            }
        }

        stage('Run Playwright Tests') {
            steps {
                catchError(buildResult: 'FAILURE', stageResult: 'FAILURE') {
                    bat '''
                        echo ===== CLEANING OLD ALLURE RESULTS =====
                        if exist allure-results rmdir /s /q allure-results

                        echo ===== RUNNING PLAYWRIGHT TESTS =====
                        npx playwright test

                        echo ===== CHECKING ALLURE RESULTS =====
                        echo ===== ALLURE RESULTS DIRECTORY =====

                        if exist allure-results (
                            echo Allure results directory FOUND
                            echo.
                            echo ===== ALLURE RESULT FILES =====
                            dir /s /b allure-results
                            echo.
                            echo ===== JSON RESULT FILES =====
                            dir /s /b allure-results\\*.json
                        ) else (
                            echo *** ALLURE RESULTS DIRECTORY NOT FOUND ***
                        )
                    '''
                }
            }
        }
    }

    post {
        always {
            echo '===== PUBLISHING ALLURE REPORT ====='

            allure([
                includeProperties: false,
                jdk: '',
                results: [[path: 'allure-results']]
            ])
        }
    }
}
