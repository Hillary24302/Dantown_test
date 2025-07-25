import styles from "./community.module.css";

const data =[
  { name: "Giftcard Amazon", amount: "200 NGN", value: "$100", prev: "$46", cur: "$56", status: "Pending", date: "10 Oct, 18" },
  { name: "Crypto - BTC", amount: "200 NGN", value: "$100", prev: "$46", cur: "$56", status: "Declined", date: "10 Oct, 18" },
  { name: "Airtime - MTN", amount: "100 NGN", value: "90 NGN", prev: "$46", cur: "$56", status: "Successful", date: "10 Oct, 18" },
  { name: "Cable - Startimes", amount: "200 NGN", value: "$100", prev: "$46", cur: "$56", status: "Pending", date: "10 Oct, 18" },
   { name: "Giftcard Amazon", amount: "200 NGN", value: "$100", prev: "$46", cur: "$56", status: "Pending", date: "10 Oct, 18" },
  { name: "Crypto - BTC", amount: "200 NGN", value: "$100", prev: "$46", cur: "$56", status: "Declined", date: "10 Oct, 18" },
  { name: "Airtime - MTN", amount: "100 NGN", value: "90 NGN", prev: "$46", cur: "$56", status: "Successful", date: "10 Oct, 18" },
  { name: "Cable - Startimes", amount: "200 NGN", value: "$100", prev: "$46", cur: "$56", status: "Pending", date: "10 Oct, 18" },
]; 

const statusClass = {
  Pending: styles.pending,
  Declined: styles.declined,
  Successful: styles.successful,
};

const CommunityPage = () => {
  return (
    <div className={styles.card}>
      <div className={styles.writeup}>
        <h3>Ruhamah Eti,</h3>
        <p>@Ruh-Eti</p>
        </div>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Transaction</th>
            <th>Amount</th>
            <th>Value</th>
            <th>Priv Bal</th>
            <th>Our Bal</th>
            <th>Status</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.name}</td>
              <td>{item.amount}</td>
              <td>{item.value}</td>
              <td>{item.prev}</td>
              <td>{item.cur}</td>
              <td><span className={statusClass[item.status]}>{item.status}</span></td>
              <td>{item.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};


export default CommunityPage;
