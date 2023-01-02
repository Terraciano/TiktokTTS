import wfi from 'wav-file-info'
wfi.infoByFilename('./audioOutput/test.wav', function(err, info){
    if (err) throw err;
    console.log(info);
});
