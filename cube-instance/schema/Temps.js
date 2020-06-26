cube(`Temps`, {
  sql: `SELECT * FROM test.officetemps`,
  measures : {
    temp: {
      sql: `temp`,
      type: `number`
    }
  },
  dimensions: {
    time: {
      sql: `time`,
      type: `time`
    },
  }
});
