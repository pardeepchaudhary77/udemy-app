import { Link } from "react-router-dom"
import { Menu, MenuItem, MenuButton, SubMenu } from '@szhsin/react-menu';

function CategoriesEle({setCategoryEle}) {
  const menu = [
    {id: 1, name: "Web Development"},
    {id: 2, name: "Business"},
    {id: 3, name: "Finance & Accounting"}
  ]
  const menu2 = [
    {id: 1, name: "Web Development", mid:1},
    {id: 2, name: "Business", mid:1},
    {id: 3, name: "Finance & Accounting", mid:2}
  ]

  const menu3 = [
    {id: 1, name: "asd", mid:1, m2id: 1},
    {id: 2, name: "vvc", mid:1, m2id: 1},
    {id: 3, name: "zyx", mid:2, m2id: 2}
  ]
  return (
  //   <div onMouseOver={()=>setCategoryEle(true)}
  //       onMouseOut={()=>setCategoryEle(false)}
  //   id="userDropdown"
  //   className="z-10 absolute left-0 mt-7 bg-white divide-y shadow-lg border dark:border-gray-600 divide-gray-100 w-56 dark:bg-gray-700 dark:divide-gray-600"
  // >
  //   <ul
  //     className="py-2 text-sm text-gray-700 dark:text-gray-200"
  //     aria-labelledby="avatarButton"
  //   >
  //     <li>
  //       <Link
  //         className="block px-4 py-2 flex justify-between hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">
  //         <span>Development</span>
  //         <span> {'>'} </span>
  //       </Link>
  //       {/* <CategoriesEleLevel2 /> */}
        
  //     </li>
  //   </ul>
  // </div>
  <Menu menuButton={<MenuButton>Categories</MenuButton>}>
    {menu.map(m => <SubMenu label={m.name}>
        {menu2.filter(filter => filter.mid === m.id).map(m2 => <SubMenu label={m2.name}>
          {menu3.filter(filter3 => m2.mid === m.id && m2.id === filter3.m2id).map(men3 => <MenuItem><Link to="/asd">{men3.name}</Link></MenuItem>)}
        </SubMenu>)}
      </SubMenu>)}

    {/* <SubMenu label="Devemopment">
      <SubMenu label="Web Development">
        <MenuItem><Link to="/asd">Javascript</Link></MenuItem>
      </SubMenu>
    </SubMenu> */}
  </Menu>
  )
}

export default CategoriesEle