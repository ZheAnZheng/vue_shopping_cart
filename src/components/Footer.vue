<template>
    <footer>
      <div class="container" >
        <svg
              width="136"
              height="24"
              class="footer-logo"
              viewBox="0 0 136 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              v-html="logoImg"
            ></svg>
        

        <div v-for="col in columns" :key="col.id" class="footer-context">
          <h2>{{col.title}}</h2>
          <a v-for="content in col.contents" :key="content" href="#">{{content}}</a>
          <div v-if="col.icons">
              <a href="#" v-for="icon in col.icons" :key="icon.id" v-html="icon.image"></a>
          </div>          
        </div> 
      </div>
    </footer>
</template>
<script>
import { ALPHA_LOGO , FB_ICON,IG_ICON ,PHONE_ICON} from '../assets/Constants.js';
import {v4 as uuidv4 } from 'uuid';
    export default{
        data(){
            return{
                logoImg:ALPHA_LOGO,
                columns:[
                    {
                        id:uuidv4(),
                        title:'客戶服務',
                        contents:[
                            '運送說明',
                            '退換貨說明',
                            '付款資訊',
                            'FAQ'
                        ]
                    },
                    {
                        id:uuidv4(),
                        title:'關於我們',
                        contents:[
                            '品牌故事',
                            '媒體沒聯繫',
                            'Press kit',
                            
                        ]
                    },
                    {
                        id:uuidv4(),
                        title:'資訊',
                        contents:[
                            '隱私權政策',
                            'Cookie',
                            'GDPR',
                        ]
                    },
                    {
                        id:uuidv4(),
                        title:'追蹤 ALPHA Shop',
                        contents:[
                            '+886 02123-45678',
                        ],
                        icons:[
                            {
                                id:uuidv4(),
                                name:'facebook',
                                image:FB_ICON
                            },
                            {
                                id:uuidv4(),
                                name:'instagram',
                                image:IG_ICON
                            },
                            {
                                id:uuidv4(),
                                name:'phone',
                                image:PHONE_ICON
                            },

                        ]
                    }

                ]
            }
        }
    }
</script>
<style lang="scss" scoped>
@import '../assets/scss/mixins.scss';

footer{
    display: none;
    height: 284px;
    background: var(--footer-bg-color);
}

@media (min-width:1000px){
    footer{
       display: block;
       margin-top:124px;
    }
    
    .footer-logo{
        align-self: center;
        max-width:180px ;
        path{
            @include setLogoColor();
        }    
    }
    .container{
        display: flex;
        justify-content: space-between;
        margin:0 auto;
        width:80%;
        height: 100%;
        
    }
    .footer-context{
        padding-top:calc(284px / 4);
        display: flex;
        flex-direction: column;
        h2{
            color: var(--primary-text-color);
        }
        a{
            color:var(--secondary-text-color);
            &:first-of-type{
                padding-top:1rem;
            }

        }
        
        path{
            fill:var(--secondary-text-color);   
            
        }
    }
    
}
</style>