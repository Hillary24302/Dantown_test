"use client";

import { Space, Table } from "antd";
import styles from "./friendsList.module.css";
import { SvgChampion, SvgMenu } from "../../svgIcons";

const sharedOnCell = (_, index) => {
  return {
    colSpan: index === 1 ? 1 : 1,
  };
};

const columns = [
  {
    title: <span className={styles.title}>Rank</span>,
    dataIndex: "key",
    rowScope: "row",
    render: (text, record, index) => {
      const isWinner = index === 0;
      const rankStyle = isWinner
        ? {
            background: "#54BCBD",
            clipPath:
              "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
            color: "#fff",
            padding: "8px 12px",
            textAlign: "center",
            width: "20px",
            height: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }
        : {};

      return (
        <div className={styles.rankCell} style={rankStyle}>
          {text}
        </div>
      );
    },
  },
  {
    title: <span className={styles.title}>Name</span>,
    dataIndex: "name",
    render: (text, record) => {
      const circleColors = ["#D9EDFF", "#FFDAD9", "#D9DAFF", "#FFDAD9"];
      const circleStyle = {
        backgroundColor: circleColors[record.key % circleColors.length],
      };

      return (
        <div className={`${styles.nameCell} ${styles.dataCell}`}>
          <span className={styles.circle} style={circleStyle}></span>
          <a>{text}</a>
          {record.key === "1" && (
            <span style={{ marginLeft: "8px" }}>
              <SvgChampion />
            </span>
          )}
        </div>
      );
    },
  },
  {
    title: <span className={styles.title}>Category</span>,
    dataIndex: "cat",
    render: (text, record, index) => {
      const categoryBackgrounds = ["#E7F7F8", "#DAFDFF", "#E7F7F8", "#FFECE8"];
      const categoryCircleColors = ["#54BCBD", "#3DEBF6", "#54BCBD", "#F4694C"];
      const categoryStyle = {
        backgroundColor:
          categoryBackgrounds[index % categoryBackgrounds.length],
        borderRadius: "24px",
        padding: "4px 0px",
        textAlign: "center",
      };
      const circleStyle = {
        backgroundColor:
          categoryCircleColors[index % categoryCircleColors.length],
        marginRight: "8px",
        width: "10px",
        height: "10px",
        borderRadius: "50%",
      };

      return (
        <div
          className={`${styles.categoryCell} ${styles.dataCell}`}
          style={categoryStyle}
        >
          <span style={circleStyle}></span>
          <span>{text}</span>
        </div>
      );
    },
    onCell: (_, index) => ({
      colSpan: 1,
    }),
  },
  {
    title: <span className={styles.title}>Points</span>,
    dataIndex: "points",
    render: (text) => <span className={styles.dataCell}>{text}</span>,
    onCell: (_, index) => ({
      colSpan: 1,
    }),
  },
];

const data = [
  {
    key: "1",
    name: "Mamang Ironmen",
    cat: "Skaters",
    points: "2.140",
  },
  {
    key: "2",
    name: "Ariana Grande",
    cat: "Cyclist",
    points: "1.814",
  },
  {
    key: "3",
    name: "Trent Alexander Arnold",
    cat: "Skaters",
    points: "1.620",
  },
  {
    key: "4",
    name: "Shakira Wakawaka",
    cat: "Yogas",
    points: "1.280",
  },
];

const FriendsList = () => {
  return (
    <>
      <Space align="center" className={styles.space}>
        Friends Rank
        <span>
          <SvgMenu />
        </span>
      </Space>
      <Table columns={columns} dataSource={data} pagination={false} />
    </>
  );
};

export default FriendsList;
