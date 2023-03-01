import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import {PLANT_LINK} from "@/constants";
const Footer: React.FC = () => {
  const defaultMessage = '鱼皮出品';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'Planet',
          title: '知识星球',
          href: 'https://wx.zsxq.com/dweb2/index/group/51112282211814',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined />鱼皮 GitHub</>,
          href: 'https://github.com/Eliaukgit?tab=repositories',
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '编程导航',
          href: PLANT_LINK,
          //开启默认打开新页面
          blankTarget: true,
        },
      ]}
    />
  );
};
export default Footer;
