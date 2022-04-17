import styled from "styled-components";

export const PageArea = styled.div`

form{
    background-color:#FFF;
    border-radius:3px;
    padding:10px;
    box-shadow: 0px 0px 9px #999;

    .area{
        display: flex;
        align-items:center;
        padding:10px;
        max-wigth:500px;
        
    
        .area--title{
            width:200px;
            text-align:right;
            padding-right:20px;
            font-weight:bold;
            font-size:14px;
        }

        .area--input{
            flex:1;

            input {
                width:80%;
                font-size:14px;
                padding: 5px;
                border: 1px solid #DDD;
                border-radius:3px;
                outline:0;
                transition: all ease .4s;

                &:focus{
                    border:1px solid #333;
                    color: #333;
                }
            }

            button{
                background-color: #0089FF;
                border:0;
                outline:0;
                padding: 5px;
                border-radius:4px;
                font-size:15px;
                cursor:pointer;
                color:#FFF;

                &:hover{
                    background-color:#E57706;
                    color:#FFF;

                }

            }
        }
    }
}

@media (max-width:600px){

    form{
        .area{
            flex-direction:column;

            .area--title{
                width:100%;
                text-align:left;
            }

            .area--input{
                width:100%;

                button{
                    width:100%;
                    padding:10px;
                }
            }
        }
    }
}
`;