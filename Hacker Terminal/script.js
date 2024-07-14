console.log("Yes i'm working")

const randomdelay = () => {
    return new Promise((resolve) => {
      let timeout = 1 + 3 * Math.random();
      setTimeout(() => {
        resolve();
      }, timeout * 500);
    });
  };

  const randomdelay2 = () => {
    return new Promise((resolve) => {
      let timeout = 1 + 3 * Math.random();
      setTimeout(() => {
        resolve();
      }, timeout * 70);
    });
  };

  const randomdelay3 = () => {
    return new Promise((resolve) => {
      let timeout = 1 + 6 * Math.random();
      setTimeout(() => {
        resolve();
      }, timeout * 100);
    });
  };

  const additem = async (item) => {
    await randomdelay();


    let div = document.createElement("div");
    let str = (div.innerHTML = item);
    let br = document.createElement("br");
    for (let i = 0; i < str.length; i++) {
      if (str[i] === ".") {
        await randomdelay3();
        document.body.append(str[i]);
      }

      await randomdelay2();
      document.body.append(str[i]);
      document.body.append(br);
    }
  };

  async function main() {
    let text = [
      "Initialized Hacking..",
      "Reading your datas and files..",
      "Fetching password..",
      "Password files detected..",
      "Sending all passwords and personal files to server..",
      "Cleaning up..",
    ];

    for (const item of text) {
      await additem(item);
    }
  }

  main();