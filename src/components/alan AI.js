intent("show me the $(TYPE restaurants|hotels|attractions)",p=>{
    let type=p.TYPE.value;
    p.play(`here are some${type}`);
    p.play({command:"filterTypeCommand",type})
})

intent("show me the restaurants with rating Above $(RATE 3|4) star",p=>{ 
    let rate=p.RATE.value;
    p.play(`here are some restaurants with rating Above ${rate} star`);
    p.play({command:"restaurantrateCommand",rate})
})

intent("show me the hotels with rating Above $(RATE 3|4) star",p=>{ 
    let rate=p.RATE.value;
    p.play(`here are some hotels with rating Above ${rate} star`);
    p.play({command:"hotelrateCommand",rate})
})

intent("show me the attractions with rating Above $(RATE 3|4) star",p=>{ 
    let rate=p.RATE.value;
    p.play(`here are some attractions with rating Above ${rate} star`);
    p.play({command:"attractionrateCommand",rate})
})