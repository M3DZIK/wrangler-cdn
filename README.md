# Cloudflare Workers to proxy Imgur

Proxy Imgur images using Cloudflare Workers

## 🚀 Installation

Roughly you'll follow these steps to install a wrangler-cdn instance to Cloudflare:

1. Fork the [wrangler-cdn repo](https://github.com/M3DZIK/wrangler-cdn) to your personal (or organizational) GitHub account.
2. Obtain Cloudflare API tokens and save them as secrets on your forked GitHub repository.
3. Use the predefined GitHub Action in your forked repository to deploy the code to Cloudflare Pages, using the secrets from step 2.
4. Make a few clicks on Cloudflare's dashboard to set up custom domains and configure some security settings.
5. Done!

### Prerequisites

* Have a Cloudflare account. If you don't have one already, you can [sign up for free at Cloudflare.com](https://dash.cloudflare.com/sign-up).
* Have a GitHub account. If you don't have one, you can [sign up for free at GitHub.com](https://github.com/signup).

### Step 1. Fork the wrangler-cdn repo to your GitHub

Simply click on [https://github.com/M3DZIK/wrangler-cdn/fork](https://github.com/M3DZIK/wrangler-cdn/fork) to fork the repository.

You may choose to modify the code in your forked repository in the future, but it's likely that you won't need to
touch the code at all. Simply fork the repository and keep it synced for future use.

### Step 2. Put some secrets on your forked repo

Go to your forked repo's [Settings -> Secrets -> Actions](../../settings/secrets/actions), and create 3 secrets (click for more details).
With these secrets in place, you'll be able to use GitHub Actions to deploy your wrangler-cdn instance to Cloudflare Pages.

<details>
  <summary><b>CLOUDFLARE_ACCOUNT_ID</b></summary>

You can get your cloudflare account id from your dashboard's url:

After you [login your Cloudflare account](https://dash.cloudflare.com/login?lang=en-US), you'll be redirected to a url like this
```
https://dash.cloudflare.com/[your-cloudflare-account-id-here]
```
The last part of the url is your cloudflare account id.

For example, if you see a url like this:
```
https://dash.cloudflare.com/fff88980eeeeedcc3ffffd4f555f4999
```

Then you'll set **CLOUDFLARE_ACCOUNT_ID** to **fff88980eeeeedcc3ffffd4f555f4999**:

<img width="846" alt="CF account ID" src="https://user-images.githubusercontent.com/1719237/208216752-56f00f51-29cb-43ea-b720-75244719898d.png">
</details>

<details>
  <summary><b>CLOUDFLARE_API_TOKEN</b></summary>

You'll need to create an API token here: [https://dash.cloudflare.com/profile/api-tokens](https://dash.cloudflare.com/profile/api-tokens)

Create a custom token:

<img width="925" alt="create_token" src="https://user-images.githubusercontent.com/1719237/205525627-14da54ae-1733-4db5-b65d-94f5ec48f360.png">

We need edit permission for Cloudflare workers scripts:

<img width="990" alt="permissions" src="https://user-images.githubusercontent.com/25513724/215381483-2101f57b-a0d1-4217-899a-0b10b6011546.png">


Finally, copy the API token here:

<img width="682" alt="API_token" src="https://user-images.githubusercontent.com/1719237/205525785-6fed8e49-7342-4b36-9d07-348e1c28cbcc.png">

  </details>

<details>
  <summary><b>CLOUDFLARE_PROJECT_NAME</b></summary>

A legit project name should have these characters: [a-z], [A-Z], [0-9], and -

We recommend using the custom domain name that you'll use for this project and replace dot (.) with dash (-)

For example, if you use photos.mycustomdomain.com, then the project name should be photos-mycustomdomain-com

Note: Don't use underscore (_), space ( ), and other characters outside [a-z], [A-Z], [0-9] and -. Or Cloudflare Pages won't let you create a project.
</details>


### Step 3. Run GitHub Action to deploy code

Go to [Actions -> Deploy to Cloudflare Pages](../../actions/workflows/deploy.yml) and run Workflow

<img width="1606" alt="deploy" src="https://user-images.githubusercontent.com/1719237/205526856-05ea0ff4-703a-4d08-bc7f-4ae2dfc07cfe.png">

If you see the green checkmark, then the deployment is successful. And you can see a Pages project in your [Cloudflare dashboard](https://dash.cloudflare.com/sign-up/pages).
You can access the site via `${CLOUDFLARE_PROJECT_NAME}.pages.dev`
</details>

**Big thanks to [Bad3r](https://github.com/Bad3r) for creating the documentation!**
