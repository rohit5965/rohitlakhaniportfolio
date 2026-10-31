# Publish the portfolio on GitHub Pages

The portfolio is ready to deploy to [rohit5965/rohitlakhaniportfolio](https://github.com/rohit5965/rohitlakhaniportfolio). Its default Pages address after a successful deployment will be `https://rohit5965.github.io/rohitlakhaniportfolio/`. Relative asset paths also support a custom domain. There is no build or dependency installation step.

## 1. Upload from Terminal

The local repository is prepared on `main`, with `origin` set to `https://github.com/rohit5965/rohitlakhaniportfolio.git`. To upload it from your Mac:

```bash
cd /Users/rohitsmac/Rohit/rohit-portfolio
git push -u origin main
```

If authentication is needed, run `gh auth login --hostname github.com`, sign in as `rohit5965`, run `gh auth setup-git`, and retry the push. The GitHub repository must already exist; these commands upload the prepared source and do not create a repository.

The original local hosting metadata in `.openai/` is ignored by Git and stays on your Mac.

## 2. Enable Pages

1. Open [the repository](https://github.com/rohit5965/rohitlakhaniportfolio) on GitHub.
2. Go to **Settings → Pages**.
3. Under **Build and deployment → Source**, select **GitHub Actions**.
4. Open **Actions → Deploy portfolio to GitHub Pages → Run workflow**, choose `main`, and run it.
5. Once the run succeeds, the deployment link is shown in **Settings → Pages** and in the workflow's `github-pages` environment.

The default Pages address will be `https://rohit5965.github.io/rohitlakhaniportfolio/` once deployment succeeds.

After this setup, each push to `main` deploys the latest `dist/` contents automatically. GitHub Pages serves only the `dist/` folder; the README and workflow are not part of the website.

Official reference: [Custom GitHub Pages workflows](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).

## 3. Connect a domain you own

No domain name has been supplied or configured in this project. Replace `yourdomain.com` below with a domain you own.

1. In the repository, open **Settings → Pages → Custom domain**.
2. Enter `yourdomain.com` and save it **before** changing DNS.
3. At your domain provider, add these DNS records:

| Type | Name / Host | Value / Target |
| --- | --- | --- |
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| CNAME | `www` | `rohit5965.github.io` |

The `www` CNAME target is the account's GitHub Pages hostname, without `https://`, a repository name, or a path. Update conflicting website records for `@` or `www` as necessary; keep unrelated email and verification records.

4. Wait for GitHub's DNS check and HTTPS certificate to be ready. DNS propagation and certificate setup can take up to 24 hours.
5. Enable **Enforce HTTPS** in the repository's Pages settings.

The workflow uses GitHub Actions, so the custom domain is managed in Pages settings; a `CNAME` file in the repository is not required.

To use only a subdomain such as `portfolio.yourdomain.com`, set that exact name in Pages settings and add a CNAME record for `portfolio` pointing to `rohit5965.github.io`. The apex A records are for hosting the root domain.

Official reference: [Manage a custom domain for GitHub Pages](https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site).

## Browser-only upload alternative

If you prefer not to use Terminal, use the separate `rohit-portfolio-static.zip` delivery:

1. Extract it. Upload its **contents** (`index.html`, `styles.css`, `script.js`, and `assets/`) to the root of a new public GitHub repository. The `index.html` file must be at the repository root.
2. In **Settings → Pages**, select **Deploy from a branch → main → /(root)** and save.
3. Configure the custom domain and DNS as described above.

This branch-based method does not use the Actions workflow. GitHub creates a `CNAME` file when you save a custom domain; keep that file during future updates.
