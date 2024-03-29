$(document).ready(function(){
    let registeruser=document.getElementById("register-user").getContext('2d');
    let registeruserchart=new Chart(registeruser,
        {
            type:'line',
            data:{
                labels:['1','2','3','4','5','6'],
                datasets:[{
                    data:[1234,2133,1823,2420,1060,1560],
                    backgroundColor:'transparent',
                    borderColor:'#fff',
                    borderWidth:2,
                    pointbackgroundColor:'#fff'
                }]
            },
            options:{
                layout:{
                    padding:{
                        left:5,
                        right:5,
                    }
                },
                scales:{
                    yAxes:[{
                        display:false
                    }],
                    xAxes:[{
                        display:false
                    }],
                },
                legend:{
                    display:false
                }
            }
        })
    let comment=document.getElementById("comment").getContext('2d');
    let commentchart=new Chart(comment,
            {
                type:'bar',
                data:{
                    labels:['1','2','3','4','5','6'],
                    datasets:[{
                        data:[1234,2133,1823,2420,1060,1560],
                        backgroundColor:'transparent',
                        borderColor:'#fff',
                        borderWidth:2,
                        pointbackgroundColor:'#fff'
                    }]
                },
                options:{
                    layout:{
                        padding:{
                            left:5,
                            right:5,
                        }
                    },
                    scales:{
                        yAxes:[{
                            display:false
                        }],
                        xAxes:[{
                            display:false
                        }],
                    },
                    legend:{
                        display:false
                    }
                }
            })
    let shopuser=document.getElementById("shop-user").getContext('2d');
    let shopuserchart=new Chart(shopuser,
                    {
                        type:'line',
                        data:{
                            labels:['1','2','3','4','5','6'],
                            datasets:[{
                                data:[1234,2133,1823,2420,1060,1560],
                                backgroundColor:'transparent',
                                borderColor:'#fff',
                                borderWidth:2,
                                pointbackgroundColor:'#fff'
                            }]
                        },
                        options:{
                            layout:{
                                padding:{
                                    left:5,
                                    right:5,
                                }
                            },
                            scales:{
                                yAxes:[{
                                    display:false
                                }],
                                xAxes:[{
                                    display:false
                                }],
                            },
                            legend:{
                                display:false
                            }
                        }
            })
    let approvedcomment=document.getElementById("approved-comment").getContext('2d');
    let approvedcommentchart=new Chart(approvedcomment,
                            {
                                type:'bar',
                                data:{
                                    labels:['1','2','3','4','5','6'],
                                    datasets:[{
                                        data:[1234,2133,1823,2420,1060,1560],
                                        backgroundColor:'transparent',
                                        borderColor:'#fff',
                                        borderWidth:2,
                                        pointbackgroundColor:'#fff'
                                    }]
                                },
                                options:{
                                    layout:{
                                        padding:{
                                            left:5,
                                            right:5,
                                        }
                                    },
                                    scales:{
                                        yAxes:[{
                                            display:false
                                        }],
                                        xAxes:[{
                                            display:false
                                        }],
                                    },
                                    legend:{
                                        display:false
                                    }
                                }
                    })
    let online=document.getElementById("online");
    let onlinechart=new Chart(online,
        {
        type:'line',
        data:{
        labels:['شنبه','یک شنبه','دو شنبه','سه شنبه','چهار شنبه','پنج شنبه','جمعه'],
        datasets:[{
            data:[1533,1423,1800,1230,1100,1500,1523],
            backgroundColor:'rgba(0,0,0,.4)',
            borderColor:'#555',
            borderWidth:3,
            pointbackgroundColor:'#333'
        }]
        },
        options:{
            legend:{
                display:false
            }
        }
    })
    $('#sidebar').on('hide.bs.collapse', function(e){
if(e.target==this){
    $('#main').removeClass('col-md-10');
}
})
$('#sidebar').on('show.bs.collapse', function(e){
    if(e.target==this){
        $('#main').addClass('col-md-10');
    }
    })
})

