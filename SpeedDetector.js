function SpeedDetector()
{
    let speed
    do
    {
    speed=prompt("Please enter speed");
    speed = parseInt(speed);
    if (speed <=70)
        console.log ("Okay");
    }
    while (speed<=70)
    let demeritpoints=((speed-70)/5);
        console.log('points'+demeritpoints);
        if (demeritpoints >12){
            console.log('license suspended')
        }
    }
SpeedDetector()