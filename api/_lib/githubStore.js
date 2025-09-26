const GITHUB_API_BASE = "https://api.github.com";

const OWNER = process.env.GITHUB_OWNER;        // e.g. 'dabourt'
const REPO = process.env.GITHUB_REPO;          // e.g. 'flexliving-assignment'
const TOKEN = process.env.GITHUB_TOKEN;        // Personal Access Token with repo scope
const PATH = process.env.APPROVED_PATH || "api/_data/approved_reviews.json";
const BRANCH = process.env.GITHUB_BRANCH || "main";

if (!OWNER || !REPO || !TOKEN) {
  // Don't throw here — but operations will fail with descriptive errors.
  // console.warn("Github store not fully configured.");
}

async function githubRequest(url, opts = {}) {
  const headers = Object.assign({
    Authorization: `token ${TOKEN}`,
    Accept: "application/vnd.github.v3+json",
    "Content-Type": "application/json"
  }, opts.headers || {});
  const res = await fetch(url, Object.assign({}, opts, { headers }));
  return res;
}

export async function readApproved() {
  // GET contents
  const url = `${GITHUB_API_BASE}/repos/${OWNER}/${REPO}/contents/${PATH}?ref=${BRANCH}`;
  const res = await githubRequest(url);
  if (res.status === 404) return [];
  if (!res.ok) throw new Error(`GitHub read error: ${res.status} ${await res.text()}`);
  const json = await res.json();
  const content = Buffer.from(json.content, "base64").toString();
  return JSON.parse(content);
}

export async function writeApproved(arr) {
  // Get file to obtain SHA (optional)
  const getUrl = `${GITHUB_API_BASE}/repos/${OWNER}/${REPO}/contents/${PATH}?ref=${BRANCH}`;
  const getRes = await githubRequest(getUrl);
  let sha = undefined;
  if (getRes.ok) {
    const g = await getRes.json();
    sha = g.sha;
  }
  const putUrl = `${GITHUB_API_BASE}/repos/${OWNER}/${REPO}/contents/${PATH}`;
  const body = {
    message: "Update approved_reviews via API",
    content: Buffer.from(JSON.stringify(arr, null, 2)).toString("base64"),
    branch: BRANCH
  };
  if (sha) body.sha = sha;
  const putRes = await githubRequest(putUrl, { method: "PUT", body: JSON.stringify(body) });
  if (!putRes.ok) throw new Error(`GitHub write error: ${putRes.status} ${await putRes.text()}`);
  return putRes.json();
}
