# Deploying Your Website to an Azure VM (Windows Guide)

This enhanced guide provides detailed instructions and examples for deploying your website to an Azure Virtual Machine (VM) from a Windows environment, incorporating best practices like Docker, Nginx, Git, and CI/CD.

## Prerequisites

* **Azure Account:** An active Azure subscription.
* **Azure CLI:** Install the Azure CLI on your Windows machine.
* **SSH Client:** Install an SSH client like PuTTY or the built-in OpenSSH client in Windows.
* **Website Code:** Your website's codebase ready for deployment.
* **Docker Desktop:** Install Docker Desktop on your Windows machine.
* **Git:** Install Git for Windows.

## Steps

1. **Connect to Azure:** Open PowerShell or command prompt and log in to your Azure account: `az login`.

2. **Create Resource Group:** `az group create --name myResourceGroup --location eastus` (or your preferred region).

3. **Create VM:** Create an Ubuntu VM: `az vm create --resource-group myResourceGroup --name myVM --image UbuntuLTS --size Standard_B2ats_v2 --generate-ssh-keys`.

4. **SSH into VM:**
    * Get the VM's public IP: `az vm show --resource-group myResourceGroup --name myVM --show-details`.
    * SSH into the VM: `ssh azureuser@<public_ip_address>` (replace with your VM's IP).

5. **Install Docker and Nginx:**
    ```bash
    sudo apt update
    sudo apt install docker.io nginx
    sudo systemctl start docker nginx
    sudo systemctl enable docker nginx
    ```

6. **Set up Git and Clone Repository:**
    ```bash
    sudo apt install git
    git clone <your_repository_url>
    cd <your_repository_directory>
    ```

7. **Dockerize Your Application (Example):** Create a `Dockerfile` in your repository root:

    ```dockerfile
    FROM node:16

    WORKDIR /app

    COPY package*.json ./

    RUN npm install

    COPY . .

    EXPOSE 3000

    CMD ["npm", "start"]
    ```

8. **Build and Run Docker Image:**
    ```bash
    docker build -t my-web-app .
    docker run -d -p 80:3000 my-web-app
    ```

9. **Configure Nginx (Example):** Create a file `/etc/nginx/sites-available/my-web-app`:

    ```nginx
    server {
        listen 80;
        server_name <your_domain_name>;

        location / {
            proxy_pass http://localhost:3000; # Your app's port
            proxy_set_header Host $host;
            proxy_set_header X-Real-IP $remote_addr;
        }
    }
    ```

    Enable the configuration:
    ```bash
    sudo ln -s /etc/nginx/sites-available/my-web-app /etc/nginx/sites-enabled/
    sudo nginx -t  # Test configuration
    sudo systemctl restart nginx
    ```

10. **Database Setup:** Install and configure your database (e.g., PostgreSQL, MySQL).  Refer to specific database documentation for instructions.

11. **Domain Mapping:** Configure your DNS records with your domain registrar to point your domain to the VM's public IP address.

12. **Set up CI/CD (Example with GitHub Actions):** Create a `.github/workflows/main.yml` file in your repository:

    ```yaml
    name: CI/CD

    on:
      push:
        branches: [ main ]

    jobs:
      build-and-deploy:
        runs-on: ubuntu-latest

        steps:
        - uses: actions/checkout@v3
        - name: Build Docker image
          run: docker build -t your-dockerhub-username/my-web-app .
        - name: Push Docker image
          run: docker push your-dockerhub-username/my-web-app
        - name: SSH into VM and deploy
          uses: appleboy/ssh-action@v0.1.7
          with:
            host: ${{ secrets.AZURE_VM_IP }}
            username: azureuser
            key: ${{ secrets.AZURE_VM_SSH_KEY }}
            script: |
              docker pull your-dockerhub-username/my-web-app
              docker stop my-web-app || true  # Stop existing container
              docker rm my-web-app || true   # Remove existing container
              docker run -d -p 80:3000 your-dockerhub-username/my-web-app
    ```

    Configure `AZURE_VM_IP` and `AZURE_VM_SSH_KEY` as secrets in your GitHub repository settings.

## Additional Tools and Best Practices


Besides Docker, Nginx, and basic web server setup, consider these tools and practices for enhanced web development and deployment:

**Development Tools:**

* **VS Code (or other IDE/Text Editor):**  A powerful code editor with extensions for various languages and frameworks.
* **Git:** Essential for version control and collaboration.  Use a Git GUI client like GitHub Desktop or SourceTree for easier management.
* **Linting and Formatting Tools (e.g., ESLint, Prettier):**  Maintain code quality and consistency.
* **Debugging Tools (e.g., Chrome DevTools, VS Code debugger):**  Efficiently debug your application.

**Deployment and Infrastructure:**

* **Docker Compose:** Define and manage multi-container applications.  Useful for complex setups with databases, caching, etc.
* **Azure Container Registry (ACR):** Store and manage your Docker images privately and securely within Azure.
* **Terraform or ARM Templates (Infrastructure as Code):** Automate infrastructure provisioning and management.
* **Azure Monitor:** Monitor application performance, logs, and metrics.
* **CI/CD Pipelines (e.g., GitHub Actions, Azure DevOps):** Automate the build, test, and deployment process.


**Example: Docker Compose with a Database:**

```yaml
version: '3.8'
services:
  web:
    build: .
    ports:
      - "80:3000"
    depends_on:
      - db
  db:
    image: postgres:14
    environment:
      POSTGRES_USER: example
      POSTGRES_PASSWORD: example
    ports:
      - "5432:5432"
```

This `docker-compose.yml` file defines two services: your web application and a PostgreSQL database.  It handles networking and dependencies between them.


## Switching to App Service

If managing the VM becomes too complex, migrating to App Service is simplified with Docker.  Create an App Service Web App for Containers and configure it to pull your Docker image from the registry.