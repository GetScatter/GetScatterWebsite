<template>
    <div id="download">

        <section class="body">
          <div class="body-text">
            <div class="row">
              <div class="single-column">
                <h2>Download {{release.version}}</h2>
                <h4>Scatter connects you to blockchains in a simple and straightforward package. It is internationalized, sleek, and powerful.</h4>
                <a :href="release.mac" class="button">
                  <div><svg width="19px" height="24px" viewBox="0 0 19 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="gs_home_v2_01_download" transform="translate(-203.000000, -582.000000)" fill="#111111" fill-rule="nonzero">
                              <g id="iconfinder_apple_245978" transform="translate(203.000000, 582.000000)">
                                  <path fill="#fff" d="M12.9905455,3.53963636 C13.9019636,2.60145455 14.5184,1.29890909 14.3497309,0 C13.0366836,0.0450909091 11.4452945,0.741090909 10.5028655,1.67927273 C9.65800727,2.50981818 8.91828364,3.83709091 9.11569455,5.11054545 C10.5807709,5.20581818 12.0776145,4.47636364 12.9905455,3.53963636 Z M15.7868218,12.5098182 C15.7588364,9.59781818 18.1844945,8.19927273 18.2918982,8.13163636 C16.9281745,6.15418182 14.8043055,5.88363636 14.0479418,5.85309091 C12.2394764,5.67054545 10.5217745,6.90618182 9.60354909,6.90618182 C8.68910545,6.90618182 7.27470545,5.87709091 5.77483636,5.90472727 C3.80299636,5.936 1.98621091,7.04 0.97344,8.78981818 C-1.07479273,12.3098182 0.448523636,17.5243636 2.44456727,20.3796364 C3.42027636,21.7774545 4.58205091,23.3454545 6.10763636,23.2887273 C7.58027636,23.232 8.13544727,22.3469091 9.91214545,22.3469091 C11.6896,22.3469091 12.1872873,23.2887273 13.7423709,23.2603636 C15.3246836,23.232 16.3261091,21.8356364 17.2934982,20.4334545 C18.4129164,18.8123636 18.8742982,17.2429091 18.9007709,17.1636364 C18.8667345,17.1447273 15.8193455,15.992 15.7868218,12.5098182 Z" id="Shape"></path>
                              </g>
                          </g>
                      </g>
                  </svg>
                  </div>
                  <div>MacOS</div>
                </a>
                <a :href="release.win" class="button">
                  <div><svg width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="gs_home_v2_01_download" transform="translate(-359.000000, -583.000000)" fill="#111111" fill-rule="nonzero">
                              <path fill="#fff" d="M359,603.523798 L368.68338,604.926288 L368.68338,595.661948 L359,595.661948 L359,603.523798 Z M359,594.33854 L368.68338,594.33854 L368.68338,585.073224 L359,586.475714 L359,594.33854 Z M370.006814,605.118135 L383,607 L383,595.661948 L370.006814,595.661948 L370.006814,605.118135 Z M370.006814,584.880888 L370.006814,594.33854 L383,594.33854 L383,583 L370.006814,584.880888 Z" id="Shape"></path>
                          </g>
                      </g>
                  </svg>
                  </div>
                  <div>Windows 64-bit</div>
                </a>
                <a :href="release.linux" class="button">
                  <div><svg width="20px" height="25px" viewBox="0 0 20 25" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                      <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
                          <g id="gs_home_v2_01_download" transform="translate(-563.000000, -581.000000)">
                              <g id="iconfinder_download_172460" transform="translate(561.000000, 581.000000)">
                                  <polyline id="Path" stroke="#fff" stroke-width="2" stroke-linecap="round" points="15.84 12.96 12 16.8 8.16 12.96"></polyline>
                                  <path d="M12,0.96 L12,16.16064" id="Path" stroke="#fff" stroke-width="2" stroke-linecap="round"></path>
                                  <rect id="Rectangle" x="0" y="0" width="24" height="24"></rect>
                                  <polyline id="Path" stroke="#fff" stroke-width="2" stroke-linecap="round" points="8.16 8.16 3.84 8.16 3.84 23.52 20.16 23.52 20.16 8.16 15.84 8.16"></polyline>
                              </g>
                          </g>
                      </g>
                  </svg></div>
                  <div>Linux Appimage</div>
                </a>
                <!-- <p><small>Make sure to read our Privacy Policy and Terms of Use.</small></p> -->
              </div>
            </div>
          </div>
        </section>

        <section class="body">
          <div class="body-text">
            <div class="row">
              <div class="single-column">
                <h3 class="secondary-header">{{release.name}}</h3>
                <section v-for="d in details">
                    <h4>{{d.title}}</h4>
                    <ul>
                        <li v-for="p in d.desc">{{p}}</li>
                    </ul>
                </section>

                <p><a class="button button-small" href="https://github.com/GetScatter/ScatterDesktop/releases/">Review the source</a></p>

                <h3 class="checksum-title">SHA256 Checksums</h3>
                <p><small>Not sure what these are? <a href="https://support.get-scatter.com/article/34-how-to-download-scatter">Read our support article</a>.</small></p>
                <div class="checksum">
                  <strong>MacOS</strong><br>
                    {{checksums.macos}}
                </div>
                <div class="checksum">
                  <strong>Windows</strong><br>
                    {{checksums.win}}
                </div>
                <div class="checksum">
                  <strong>Linux</strong><br>
                    {{checksums.linux}}
                </div>
              </div>
            </div>
          </div>
        </section>

    </div>
</template>

<script>

    export default {
        name: 'Features',
        data(){return {
	        release:{},
        }},
        computed:{
            details(){
            	if(!this.release.details) return [];

            	const parts = this.release.details.split('## SHA256')[0].split('## ');
	            return parts.map(part => {
            		const desc = part.split('\r\n').map(x => x.replace('- ', '')).filter(x => x.length);
            		const title = desc.shift();
            		return {
            			title, desc
                    }
                });
            },
            checksums(){
	            if(!this.release.details) return [];
	            const parts = this.release.details.split('## SHA256')[1].split('\r\n').map(x => x.replace('- ', ''));

	            const getHash = needle => parts.find(x => x.toLowerCase().indexOf(needle+':') > -1).split(':')[1].trim();

	            return {
	            	macos:getHash('macos'),
	            	win:getHash('windows'),
	            	linux:getHash('linux'),
                }
            }
        },
        created(){
            this.init();
        },
        methods:{
        	init(){
		        fetch(`https://api.get-scatter.com/v1/version`).then(x => x.json()).then(res => {
		        	this.release = res;
		        }).catch(err => {
		        	console.error(err);
		        	this.release = {
		        		details:'',
                        name:'Error fetching version',

                    }
                })
            }
        }
    }

</script>
<style lang="scss">
    @import "../variables";

    #download {
        background-color:$white;
        text-align:left;

        .release-notes li {
          list-style: none;
          margin: 3rem 3rem 3rem 1.8rem;
        }

        .release-notes li::before {
          content: "\2022";
          color: $blue;
          font-weight: bold;
          font-size:2.4rem;
          line-height:2rem;
          display: inline-block;
          width: 1em;
          margin-left: -1em;
        }

        .button {
          margin:0 10px 3rem 0;
          svg {
            height:16px;
          }
        }

        .checksum-title {
          color:$black;
          font-size:1.8rem;
        }

        .checksum {
          padding:2rem;
          border:3px solid $black;
          border-radius:3px;
          margin-bottom:2rem;
          font-size:90%;
          line-height:1.8rem;
          word-break: break-all;
        }
    }

</style>