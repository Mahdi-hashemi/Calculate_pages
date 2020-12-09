document.querySelector("#clk").addEventListener("click", () => {
    let vasels = document.querySelector('#selctradif').value;
    let shorad = document.querySelector("#inp").value;
    if (shorad === '') {
        alert(`عدد رو وارد نکردی`);
    } else {
        let shomakoli = (vasels - 1) * 69 + Number(shorad);
        let sta = (shomakoli - 1) * 4 + 1;
        let aka = shomakoli * 4;
        let pimane = shorad % 11;
        if (pimane === 0) {
            pimane = 11;
        };
        let section = document.querySelector('#section');
        section.style.padding = `10px`;
        section.innerHTML = `<p>
        باید برای تکلیف دوم بری به این <a href="http://www.cs.rpi.edu/~moorthy/Courses/S04/modcomp/">لینک </a> پاور فصل
        ${pimane} رو دانلود کنی و ارائه شفاهی بدی <br> <br>
        برای تکلیف سوم هم از صفحه ${sta} تا صفحه ${aka} این <a
            href="http://library.lol/main/BA5FF8420F90F861837783127F524EC8">کتاب </a> رو تو لاتکس ارائه نوشتاری بدی <br>
        <br>
        </p>
        <a href="https://github.com/AliRazavi-edu/PNU_3991/tree/master/_BSc/Theory-of-Languages-and-Machines#Evaluation"
        style="background-color: red; color: white; border: none;
        width: 30%; margin: 1px auto;">بازگشت</a>`;
        document.querySelector("#inp").value = '';
    };

})