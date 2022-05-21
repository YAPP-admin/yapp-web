import fs from 'fs';
import glob from 'glob';
import { Project } from 'types/project';

const POSTS_PATH = `${process.cwd()}/database/projects`; // Database 위치

const DIR_REPLACE_STRING = '/projects';

interface ReturnTypes {
  slug: string[];
  project: Project;
}

export async function getAllProjects(): Promise<Array<ReturnTypes>> {
  const files = glob.sync(`${POSTS_PATH}/**/*.json`.replace(/\\/g, '/')); // JSON 파일들 경로 가져오기

  const projects = files.reduce((acc, cur): any => {
    const jsonFile = fs.readFileSync(cur, { encoding: 'utf8' }); // 가져온 경로로 file 읽기
    const jsonData = JSON.parse(jsonFile); // JSON 으로 파싱

    // PATH 설정(동적 라우팅 경로) 및 Project를 찾을 때 사용되는 변수입니다.
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
