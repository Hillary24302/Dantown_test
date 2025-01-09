
import { Dropdown, Space } from "antd";
import { SvgArrowDown } from "../../svgIcons";
import styles from "./topbar.module.css";

const items = [
  {
    key: "1",
    label: "First Item",
  },
  {
    key: "2",
    label: "Second Item",
  },
];

const KDropdown = () => {
  return (
    <Dropdown
      menu={{
        items,
      }}
    >
      <div>
        <Space className={styles.name}>
          Jamet Roy
          <SvgArrowDown />
        </Space>
      </div>
    </Dropdown>
  );
};

export default KDropdown;
