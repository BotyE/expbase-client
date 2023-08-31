

export const getComments = async () => {
      let res = await fetch('http://localhost/newapi/', {
            method: "GET",
            headers: {
                Accept: 'application/json',
              },
        })
        const data2 = await res.text();

        return data2;

}