// 빌드 전에 public/sitemap.xml 을 생성합니다. (package.json 의 build 스크립트에서 실행)
import fs from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const metaData = fs.readFileSync(
  path.join(root, 'database/metaData.ts'),
  'utf8',
);
const siteUrl = metaData.match(/siteUrl:\s*'([^']+)'/)[1];

const projectsDir = path.join(root, 'database/projects');
const projectPaths = fs
  .readdirSync(projectsDir)
  .filter((generation) =>
    fs.statSync(path.join(projectsDir, generation)).isDirectory(),
  )
  .flatMap((generation) =>
    fs
      .readdirSync(path.join(projectsDir, generation))
      .filter((file) => file.endsWith('.json'))
      .map(
        (file) =>
          `/project/${generation}/${encodeURIComponent(
            file.replace(/\.json$/, ''),
          )}`,
      ),
  )
  .sort();

const paths = ['', '/project', '/recruit', '/story', ...projectPaths];
const escapeXml = (value) => value.replace(/&/g, '&amp;');

const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${paths
  .map((p) => `  <url><loc>${escapeXml(siteUrl + p)}</loc></url>`)
  .join('\n')}
</urlset>
`;

fs.writeFileSync(path.join(root, 'public/sitemap.xml'), xml);
console.log(`sitemap.xml: ${paths.length} urls`);
