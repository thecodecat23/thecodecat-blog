# PowerShell script to build and run Docker container for Jekyll

# Build the Docker image
Write-Host "Building Docker image..."
docker build -t thecodecat-blog .

# Check if the Docker image was built successfully
if ($?) {
    Write-Host "Docker image built successfully."

    # Run the Docker container in the background
    Write-Host "Running Docker container..."
    Start-Process "docker" "run -p 4000:4000 -v ${PWD}:/usr/src/app thecodecat-blog"

    # Function to check if the site is up
    function Wait-ForSite {
        $url = "http://localhost:4000"
        $maxRetries = 150  # Max retries (2 seconds each retry, total 5 minutes)
        $retryInterval = 2  # Seconds between retries

        for ($i = 1; $i -le $maxRetries; $i++) {
            try {
                $response = Invoke-WebRequest -Uri $url -UseBasicParsing -TimeoutSec 2
                if ($response.StatusCode -eq 200) {
                    Write-Host "Site is up!"
                    return $true
                }
            } catch {
                Write-Host "Waiting for site to start... Attempt $i of $maxRetries"
            }

            Start-Sleep -Seconds $retryInterval
        }

        Write-Host "Site failed to start after $maxRetries attempts."
        return $false
    }

    # Check if the site is available
    if (Wait-ForSite) {
        # Open the default web browser to the Jekyll site
        Write-Host "Opening browser to http://localhost:4000"
        Start-Process "http://localhost:4000"
    } else {
        Write-Host "Failed to start the site."
    }
} else {
    Write-Host "Failed to build Docker image."
}