<template>
    <div id="container" class="clearfix">
        <h3>调整窗口大小查看效果</h3>
        <!-- tips5:为每个元素设置不同屏幕大小时，要显示的自定义大小的class类 -->
        <div class="grid-df-12 grid-sm-6 grid-md-4 grid-lg-6">grid1</div>
        <!-- tips5:释义：grid1在默认屏幕大小时占12格即1行，在sm尺寸时占6格，在md尺寸时占4格，在lg尺寸时占6格 -->
        <div class="grid-df-12 grid-sm-6 grid-md-4 grid-lg-6">grid2</div>
        <div class="grid-df-12 grid-sm-9 grid-md-4 grid-lg-12">grid3</div>
        <!-- tips5:释义：grid3在默认屏幕大小时占12格即1行，在sm尺寸时占9格，在md尺寸时占4格，在lg尺寸时占12格 -->
        <div class="grid-df-12 grid-sm-3 grid-md-3 grid-lg-12">grid4</div>
        <div class="grid-df-12 grid-sm-12 grid-md-3 grid-lg-7">grid5</div>
        <div class="grid-df-12 grid-sm-4 grid-md-3 grid-lg-5">grid6</div>
        <div class="grid-df-12 grid-sm-4 grid-md-3 grid-lg-8">grid7</div>
        <div class="grid-df-12 grid-sm-4 grid-md-6 grid-lg-4">grid8</div>
        <div class="grid-df-12 grid-sm-2 grid-md-6 grid-lg-1">grid9</div>
        <div class="grid-df-12 grid-sm-9 grid-md-2 grid-lg-11">grid10</div>
        <div class="grid-df-12 grid-sm-1 grid-md-1 grid-lg-3">grid11</div>
        <div class="grid-df-12 grid-sm-12 grid-md-9 grid-lg-9">grid12</div>   
    </div>

</template>

<script>
    export default{

    }

</script>


<style scoped>
        html,body,div,h3{
            margin:0px;
            padding:0px;
            box-sizing:border-box;/*tips1:必须限制盒模型大小，这样才能设置每个grid之间的间距和宽框，不然元素无法在一行内完全展示*/
        }
        .clearfix:before,
        .clearfix:after{
            content:"";
            display:block;
            clear:both;
        }
        #container{/*tips2:必须有一个总容器包裹所有grid*/
            margin:0 auto;
        }
        #container div{/*tips2:总容器元素下的grid元素全部设置浮动，或者设置成inline元素，不设置宽度*/
            display:inline-block;
            height:60px;
            border:2px solid white;
            background:#ccc;
            text-align:center;
            line-height:60px;
        }
        /*tips3:定义不同屏幕宽度状态下的class 类名称，df默认屏幕尺寸，sm屏幕小尺寸，md屏幕中等尺寸，lg屏幕大尺寸*/
        .grid-df-12,.grid-df-11,.grid-df-10,.grid-df-9,.grid-df-8,
        .grid-df-7,.grid-df-6,.grid-df-5,.grid-df-4,.grid-df-3,
        .grid-df-2,.grid-df-1{
            float:left;
        }
        .grid-sm-12,.grid-sm-11,.grid-sm-10,.grid-sm-9,.grid-sm-8,
        .grid-sm-7,.grid-sm-6,.grid-sm-5,.grid-sm-4,.grid-sm-3,
        .grid-sm-2,.grid-sm-1{
            float:left;
        }
        .grid-md-12,.grid-md-11,.grid-md-10,.grid-md-9,.grid-md-8,
        .grid-md-7,.grid-md-6,.grid-md-5,.grid-md-4,.grid-md-3,
        .grid-md-2,.grid-md-1{
            float:left;
        }
        .grid-lg-12,.grid-lg-11,.grid-lg-10,.grid-lg-9,.grid-lg-8,
        .grid-lg-7,.grid-lg-6,.grid-lg-5,.grid-lg-4,.grid-lg-3,
        .grid-lg-2,.grid-lg-1{
            float:left;
        }
        /*tips4:设置媒体查询，在屏幕窗口大小变化时限定container总容器元素的宽度，并使指定屏幕宽度
        条件满足时让对应的class类生效*/
        @media screen and (max-width:768px){
            #container div{
                background:burlywood;
            }
            #container{
                width:100%;
            }
            .grid-df-1{
                width:8.33333333%;
            }
            .grid-df-2{
                width:16.66666667%;
            }            
            .grid-df-3{
                width:25%;
            }            
            .grid-df-4{
                width:33.33333333%;
            }            
            .grid-df-5{
                width:41.66666667%;
            }           
            .grid-df-6{
                width:50%;
            }         
            .grid-df-7{
                width:58.33333333%;
            }
            .grid-df-8{
                width:66.66666667%;
            }
            .grid-df-9{
                width:75%;
            }
            .grid-df-10{
                width:83.33333333%;
            }
            .grid-df-11{
                width:91.66666667%;
            }
            .grid-df-12{
                width:100%;
            }
        }
        @media screen and (min-width:768px){
            #container div{
                background:yellowgreen;
            }
            #container{
                width:768px;
            }
            .grid-sm-1{
                width:8.3333333%;
            }
            .grid-sm-2{
                width:16.666666%;
            }            
            .grid-sm-3{
                width:25%;
            }            
            .grid-sm-4{
                width:33.333333%;
            }            
            .grid-sm-5{
                width:41.666666%;
            }           
            .grid-sm-6{
                width:50%;
            }         
            .grid-sm-7{
                width:58.333333%;
            }
            .grid-sm-8{
                width:66.666666%;
            }
            .grid-sm-9{
                width:75%;
            }
            .grid-sm-10{
                width:83.3333333%;
            }
            .grid-sm-11{
                width:91.6666666%;
            }
            .grid-sm-12{
                width:100%;
            }
        }
        @media screen and (min-width:992px){
            #container div{
                background:lightcoral;
            }
            #container{
                width:992px;
            }
            .grid-md-1{
                width:8.3333333%;
            }
            .grid-md-2{
                width:16.666666%;
            }            
            .grid-md-3{
                width:25%;
            }            
            .grid-md-4{
                width:33.333333%;
            }            
            .grid-md-5{
                width:41.666666%;
            }           
            .grid-md-6{
                width:50%;
            }         
            .grid-md-7{
                width:58.333333%;
            }
            .grid-md-8{
                width:66.666666%;
            }
            .grid-md-9{
                width:75%;
            }
            .grid-md-10{
                width:83.3333333%;
            }
            .grid-md-11{
                width:91.6666666%;
            }
            .grid-md-12{
                width:100%;
            }
        }
        @media screen and (min-width:1200px){
            #container div{
                background:lightblue;
            }
            #container{
                width:1200px;
            }
            .grid-lg-1{
                width:8.3333333%;
            }
            .grid-lg-2{
                width:16.666666%;
            }            
            .grid-lg-3{
                width:25%;
            }            
            .grid-lg-4{
                width:33.333333%;
            }            
            .grid-lg-5{
                width:41.666666%;
            }           
            .grid-lg-6{
                width:50%;
            }         
            .grid-lg-7{
                width:58.333333%;
            }
            .grid-lg-8{
                width:66.666666%;
            }
            .grid-lg-9{
                width:75%;
            }
            .grid-lg-10{
                width:83.3333333%;
            }
            .grid-lg-11{
                width:91.6666666%;
            }
            .grid-lg-12{
                width:100%;
            }
        }

</style>