import{_ as r,a as i,b as n,c as a,d as e}from"./org_tag_scheme-0392461b.js";import{_ as l,r as c,o as p,c as d,a as g,b as t,d as h,w as _,e as o}from"./app-697cd87e.js";const u={},m=o('<h1 id="团队节点与标签" tabindex="-1"><a class="header-anchor" href="#团队节点与标签" aria-hidden="true">#</a> 团队节点与标签</h1><div class="custom-container warning"><p class="custom-container-title">注意</p><p><strong>团队节点及标签说明</strong></p><ul><li><p><strong>团队节点</strong>是团队注册并管理的私有节点。</p></li><li><p><strong>团队标签</strong>用于关联团队内的节点机器与分析项目。</p></li><li><p>团队可以利用<strong>团队标签</strong>注册并使用<strong>团队节点</strong>。</p></li><li><p>在项目的分析方案中配置运行环境为团队标签后，才可将该项目的分析任务下发到对应的团队节点。</p></li><li><p>团队节点<strong>仅支持运行</strong>当前团队中的分析任务，节点可执行的任务范围取决于该节点的负责人权限：</p><ul><li>如果节点负责人为团队管理员，该节点可以执行当前团队所有项目的分析任务</li><li>如果节点负责人为项目管理员，该节点只能运行指定项目下的分析任务</li><li>如果节点负责人为部分代码库的管理员，该节点只能运行对应代码库的分析任务</li></ul></li></ul></div><h2 id="适用场景" tabindex="-1"><a class="header-anchor" href="#适用场景" aria-hidden="true">#</a> 适用场景</h2><ol><li><p>团队因资源可靠性或项目敏感性，需使用私有机器资源</p></li><li><p>团队项目分析依赖<strong>特定机器环境</strong>（比如CPU架构、操作系统等）</p></li></ol><p>以上场景，团队可接入专机资源作为团队节点，仅分析自己业务的代码库，以<strong>保证执行效率</strong>，<strong>保护源码安全</strong>，<strong>支持项目环境依赖</strong>等。</p><h2 id="团队节点注册" tabindex="-1"><a class="header-anchor" href="#团队节点注册" aria-hidden="true">#</a> 团队节点注册</h2>',6),E=o('<h2 id="团队节点管理" tabindex="-1"><a class="header-anchor" href="#团队节点管理" aria-hidden="true">#</a> 团队节点管理</h2><p>完成团队节点注册后，可以在当前团队<code>节点管理</code>下看到对应的节点信息，同时<strong>需要进行节点配置</strong></p><div class="custom-container warning"><p class="custom-container-title">注意</p><ul><li>团队节点<strong>首次注册</strong>时，需要手动在平台上配置<strong>所属标签</strong>、<strong>节点可用性</strong>、<strong>工具进程</strong>等。</li><li>将节点的<strong>节点可用性</strong>调整为<strong>活跃</strong>后，节点终端客户端运行日志会输出<strong>心跳上报成功</strong>的日志</li></ul></div><ul><li><p>首次注册团队节点，节点状态默认为不可用，需调整节点状态为“活跃”： <img src="'+r+'" alt="注册团队节点"></p></li><li><p>配置节点关联的工具进程：</p><p><img src="'+i+'" alt="配置工具进程"></p></li></ul><div class="custom-container tip"><p class="custom-container-title">提示</p><ol><li>团队节点使用的<strong>所属标签</strong>均为当前团队内创建的标签，可参见<a href="#%E5%9B%A2%E9%98%9F%E6%A0%87%E7%AD%BE%E7%AE%A1%E7%90%86">团队标签管理</a></li><li>团队标签可以参考<code>CodeDog</code>标签为不同的系统类型（Linux、MacOS、Windows）建立标签，比如<code>专属标签-Linux</code>、<code>专属标签-Mac</code>等</li></ol></div><h2 id="使用团队标签" tabindex="-1"><a class="header-anchor" href="#使用团队标签" aria-hidden="true">#</a> 使用团队标签</h2><p>您可以创建一个团队标签，并配置到您的团队节点和您的分析方案中</p><ul><li><p>创建团队标签。</p><p><img src="'+n+'" alt="创建团队标签"></p></li><li><p>配置团队节点所属标签。</p><p><img src="'+a+'" alt="节点配置团队标签"></p></li><li><p>配置分析方案运行环境。</p><p><img src="'+e+'" alt="方案配置团队标签"></p></li></ul>',8);function f(x,B){const s=c("RouterLink");return p(),d("div",null,[m,g("p",null,[t("参考"),h(s,{to:"/zh/guide/%E5%AE%A2%E6%88%B7%E7%AB%AF/%E5%B8%B8%E9%A9%BB%E8%8A%82%E7%82%B9%E5%88%86%E6%9E%90.html"},{default:_(()=>[t("客户端常驻节点分析")]),_:1}),t("进行环境配置和启动节点。")]),E])}const b=l(u,[["render",f],["__file","节点管理.html.vue"]]);export{b as default};
