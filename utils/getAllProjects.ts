import fs from 'fs';
import glob from 'glob';

const POSTS_PATH = `${process.cwd()}/database/projects`; // Database 위치

const DIR_REPLACE_STRING = '/projects';

export async function getAllProjects(): Promise<Array<any>> {
  const files = glob.sync(`${POSTS_PATH}/**/*.json`); // JSON 파일들 경로 가져오기

  const projects = files.reduce((acc, cur): any => {
    const jsonFile = fs.readFileSync(cur, { encoding: 'utf8' }); // 가져온 경로로 file 읽기
    const jsonData = JSON.parse(jsonFile); // JSON 으로 파싱

    const slug = cur
      .slice(cur.indexOf(DIR_REPLACE_STRING) + DIR_REPLACE_STRING.length + 1)
      .replace('.json', '')
      .split('/');

    return [
      ...acc,
      {
        slug,
        project: jsonData,
      },
    ];
  }, []);

  return projects;
}
