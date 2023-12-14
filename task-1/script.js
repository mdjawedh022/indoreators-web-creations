
const initialData = [
  "Onboarding Call",
  "Google Search Console Access",
  "Google Analytics",
  "Website Access",
  "Technical Audit",
  "Anchor Text and Semantic Analysis",
  "Competitor Analysis",
  "Anchor Text/URL Mapping",
  "Google Data Studio Report + Local Reporting Suit",
  "Site level Optimization",
  "On Page Optimization",
  "Content Creation",
  "Content Publishing",
  "premium Press Release",
  "Authority Niche Placements",
  "Review Management",
  "Index Links",
  "Video Recap",
];

const TableCount = () => {
  const rows = 18;
  const columns = 6;


  const savedData = JSON.parse(localStorage.getItem("tableData")) || Array.from({ length: rows }, () => Array(columns).fill(""));

  const [tableData, setTableData] = React.useState(savedData);

  const handleTaskChange = (rowIndex, colIndex, event) => {
    const newData = [...tableData];
    newData[rowIndex][colIndex] = event.target.value;
    setTableData(newData);
   
    localStorage.setItem("tableData", JSON.stringify(newData));
  };

  return React.createElement(
    "table",
    null,
    React.createElement(
      "thead",
      null,
      React.createElement(
        "tr",
        null,
        React.createElement("th", null, "Column 1"),
        Array.from({ length: columns - 1 }).map((_, index) =>
          React.createElement("th", { key: index }, `Column ${index + 2}`)
        )
      )
    ),
    React.createElement(
      "tbody",
      null,
      Array.from({ length: rows }).map((_, rowIndex) =>
        React.createElement(
          "tr",
          { key: rowIndex },
          React.createElement("td", null, initialData[rowIndex]),
          Array.from({ length: columns - 1 }).map((_, colIndex) =>
            React.createElement(
              "td",
              { key: colIndex },
              React.createElement("input", {
                type: "text",
                value: tableData[rowIndex][colIndex],
                onChange: (event) => handleTaskChange(rowIndex, colIndex, event),
              })
            )
          )
        )
      )
    )
  );
};

ReactDOM.render(
  React.createElement(TableCount),
  document.getElementById("root")
);
