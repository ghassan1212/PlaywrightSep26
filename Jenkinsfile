pipeline {
    agent any

    stages {

        stage('Checkout') {
            steps {
                checkout scm
            }
        }

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
                        if exist allure-results (
                            echo.
                            echo Allure results directory FOUND
                            echo.
                            dir /s /b allure-results
                        ) else (
                            echo.
                            echo ERROR: allure-results directory NOT FOUND
                            echo.
                            exit /b 1
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
                [path: 'allure-results']
            ])
        }
    }
}
