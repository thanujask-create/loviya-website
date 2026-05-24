;!function(){try { var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof global?global:"undefined"!=typeof window?window:"undefined"!=typeof self?self:{},n=(new e.Error).stack;n&&((e._debugIds|| (e._debugIds={}))[n]="226dedfb-5c13-45ab-7814-dbea8882ebfb")}catch(e){}}();
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,11872,e=>{"use strict";var t=e.i(221628),r=e.i(896779),a=e.i(416340),i=e.i(194125);let s=e=>e.flatMap(e=>{let t=e.childItems?s(e.childItems):[];return!e.shortcutId||!e.url||e.disabled||e.isExternal?t:[e,...t]}),l=({item:e})=>{let t=(0,r.useRouter)(),{shortcutId:s,url:l}=e,o=(0,a.useCallback)(()=>{t.push(l)},[t,l]);return(0,i.useShortcut)(s,o),null};e.s(["ProductMenuShortcuts",0,({menu:e})=>{let r=e.flatMap(e=>s(e.items));return(0,t.jsx)(t.Fragment,{children:r.map(e=>(0,t.jsx)(l,{item:e},`${e.shortcutId}-${e.url}`))})}])},228027,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(843778);let i=(0,r.cva)(["pt-12 last:pb-12 gap-6"],{variants:{orientation:{horizontal:"grid @3xl:grid-cols-[1fr_2fr] @3xl:gap-12",vertical:"flex flex-col"}},defaultVariants:{orientation:"vertical"}}),s=({className:e,orientation:r="vertical",children:s,...l})=>(0,t.jsx)("div",{"data-slot":"page-section","data-orientation":r,className:(0,a.cn)(i({orientation:r}),e),...l,children:s});s.displayName="PageSectionRoot";let l=({className:e,children:r,...i})=>(0,t.jsx)("div",{"data-slot":"page-section-summary",className:(0,a.cn)("flex flex-col gap-1",e),...i,children:r});l.displayName="PageSectionSummary";let o=({className:e,children:r,...i})=>(0,t.jsx)("h2",{"data-slot":"page-section-title",className:(0,a.cn)("heading-section",e),...i,children:r});o.displayName="PageSectionTitle";let n=({className:e,children:r,...i})=>(0,t.jsx)("div",{"data-slot":"page-section-description",className:(0,a.cn)("text-sm text-foreground-light",e),style:{textBoxTrim:"trim-end"},...i,children:r});n.displayName="PageSectionDescription";let d=({className:e,...r})=>(0,t.jsx)("div",{"data-slot":"page-section-aside",className:(0,a.cn)("flex items-center gap-2","@xl:self-end",e),...r});d.displayName="PageSectionAside";let c=({className:e,children:r,...i})=>(0,t.jsx)("div",{className:"@container",children:(0,t.jsx)("div",{"data-slot":"page-section-meta",className:(0,a.cn)("flex flex-col @xl:flex-row @xl:justify-between @xl:items-center gap-4",'*:data-[slot="page-section-summary"]:flex-1','*:data-[slot="page-section-summary"]:@xl:self-center','*:data-[slot="page-section-aside"]:shrink-0',e),...i,children:r})});c.displayName="PageSectionMeta";let u=({className:e,...r})=>(0,t.jsx)("div",{"data-slot":"page-section-content",className:(0,a.cn)(e),...r});u.displayName="PageSectionContent",e.s(["PageSection",0,s,"PageSectionAside",0,d,"PageSectionContent",0,u,"PageSectionDescription",0,n,"PageSectionMeta",0,c,"PageSectionSummary",0,l,"PageSectionTitle",0,o])},95053,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),i=e.i(843778),s=e.i(20482),l=e.i(737018),o=e.i(282410);let n=(0,r.cva)("relative grid gap-10",{variants:{size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},align:{left:"",right:""},responsive:{true:"",false:""},layout:{horizontal:"flex flex-col gap-2 md:grid md:grid-cols-12",vertical:"flex flex-col gap-2",flex:"flex flex-row gap-3","flex-row-reverse":"flex flex-col-reverse gap-2 md:gap-6 md:flex-row-reverse md:justify-between"},flex:{true:"",false:""}},compoundVariants:[{layout:"flex",align:"right",className:"justify-between"},{layout:"flex-row-reverse",align:"right",className:"justify-between"}],defaultVariants:{}}),d=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"flex flex-col gap-2 col-span-4",vertical:"flex flex-row gap-2 justify-between",flex:"flex flex-col gap-0 min-w-0","flex-row-reverse":"flex flex-col min-w-0 grow"},labelLayout:{horizontal:"",vertical:"","":""}},compoundVariants:[{flex:!0,align:"left",className:"order-2"},{flex:!0,align:"right",className:"order-1"},{layout:["vertical","flex"],labelLayout:void 0,flex:!1,className:"flex flex-row gap-2 justify-between"},{layout:"horizontal",className:"flex flex-col gap-2"}],defaultVariants:{}}),c=(0,r.cva)("transition-all duration-500 ease-in-out",{variants:{flex:{true:"",false:""},align:{left:"order-1",right:"order-2"},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:"order-1"},{flex:!0,align:"right",className:"order-2"},{layout:["vertical","flex"],className:"col-span-12"},{layout:"horizontal",align:"left",className:"col-span-8"},{layout:"horizontal",align:"right",className:"text-right"}],defaultVariants:{}}),u=(0,r.cva)("text-foreground-lighter leading-normal",{variants:{size:{...o.SIZE.text},layout:{vertical:"mt-2",horizontal:"mt-2",flex:"","flex-row-reverse":""}},defaultVariants:{}}),m=(0,r.cva)("text-foreground-muted",{variants:{size:{...o.SIZE.text}},defaultVariants:{}}),f=(0,r.cva)("text-foreground-muted",{variants:{size:{...o.SIZE.text}},defaultVariants:{}}),x=(0,r.cva)("text-foreground-muted",{variants:{size:{...o.SIZE.text}},defaultVariants:{}}),g=(0,r.cva)("",{variants:{flex:{true:"",false:""},align:{left:"",right:""},layout:{horizontal:"",vertical:"",flex:"","flex-row-reverse":""}},compoundVariants:[{flex:!0,align:"left",className:""},{flex:!0,align:"right",className:"order-last"},{layout:"flex-row-reverse",className:"flex flex-col justify-center items-start md:items-end shrink-0 md:w-1/2 xl:w-2/5 [&>div]:md:w-full"}]}),p=(0,r.cva)("",{variants:{nonBoxInput:{true:"",false:""},label:{true:"",false:""},layout:{vertical:"",horizontal:"","flex-row-reverse":""}},compoundVariants:[{nonBoxInput:!0,label:!0,layout:"vertical",className:"my-3"},{nonBoxInput:!0,label:!0,layout:"horizontal",className:"my-3 md:mt-0 mb-3"}],defaultVariants:{}}),h=a.default.forwardRef(({align:e="left",className:r,description:a,id:o,label:h,labelOptional:b,layout:v="vertical",style:y,labelLayout:w,size:_="medium",beforeLabel:j,afterLabel:N,nonBoxInput:S=!h,hideMessage:I=!1,isReactForm:k,error:T,...z},C)=>{let A="flex"===v||"flex-row-reverse"===v,P=!!(h||j||N),R=k&&!I?(0,t.jsx)(s.FormMessage,{className:(0,i.cn)("mt-2 transition-all duration-300 ease-in-out","flex-row-reverse"===v&&"mt-0"),"data-formlayout-id":"message"}):T&&!I?(0,t.jsx)("p",{className:(0,i.cn)("mt-2 text-sm text-destructive","flex-row-reverse"===v&&"mt-0"),children:T}):null,U=a&&k?(0,t.jsx)(s.FormDescription,{className:(0,i.cn)(u({size:_,layout:v})),"data-formlayout-id":"description",id:`${o}-description`,children:a}):a?(0,t.jsx)("p",{className:(0,i.cn)(u({size:_,layout:v}),"text-sm text-foreground-light"),"data-formlayout-id":"description",children:a}):null,O=()=>(0,t.jsxs)(t.Fragment,{children:[j&&(0,t.jsx)("span",{className:(0,i.cn)(m({size:_})),id:o+"-before","data-formlayout-id":"beforeLabel",children:(0,t.jsx)("span",{children:j})}),(0,t.jsx)("span",{children:h}),N&&(0,t.jsx)("span",{className:(0,i.cn)(f({size:_})),id:o+"-after","data-formlayout-id":"afterLabel",children:N})]});return(0,t.jsxs)("div",{ref:C,...z,className:(0,i.cn)(n({size:_,flex:A,align:e,layout:v}),r),children:[A&&(0,t.jsxs)("div",{className:(0,i.cn)(g({flex:A,align:e,layout:v})),children:[z.children,"flex-row-reverse"===v&&R]}),P||b||"horizontal"===v?(0,t.jsx)(t.Fragment,{children:(0,t.jsxs)("div",{className:(0,i.cn)(d({align:e,labelLayout:w,flex:A,layout:v})),"data-formlayout-id":"labelContainer",children:[P&&k?(0,t.jsx)(s.FormLabel,{className:"text-foreground flex gap-2 items-center wrap-break-word","data-formlayout-id":"formLabel",htmlFor:z.name||o,children:(0,t.jsx)(O,{})}):(0,t.jsx)(l.Label,{className:"text-foreground flex gap-2 items-center wrap-break-word leading-normal","data-formlayout-id":"label",htmlFor:z.name||o,children:(0,t.jsx)(O,{})}),b&&(0,t.jsx)("span",{className:(0,i.cn)(x({size:_})),id:o+"-optional","data-formlayout-id":"labelOptional",children:b}),A&&(0,t.jsxs)(t.Fragment,{children:[U,"flex-row-reverse"!==v&&R]})]})}):null,!A&&(0,t.jsx)("div",{className:(0,i.cn)(c({align:e,layout:v})),style:y,"data-formlayout-id":"dataContainer",children:(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:(0,i.cn)(p({nonBoxInput:S,label:h,layout:v})),"data-formlayout-id":"nonBoxInputContainer",children:z.children}),R,U]})})]})});e.s(["FormLayout",0,h])},538482,e=>{"use strict";var t=e.i(221628),r=e.i(416340),a=e.i(20482),i=e.i(95053);let s=(0,r.forwardRef)(({...e},r)=>(0,t.jsx)(a.FormItem,{children:(0,t.jsx)(i.FormLayout,{ref:r,isReactForm:!0,...e,children:e.children})}));s.displayName="FormItemLayout",e.s(["FormItemLayout",0,s])},344580,e=>{"use strict";var t=e.i(67318),r=function(e,r,a){if(e&&"reportValidity"in e){var i=(0,t.get)(a,r);e.setCustomValidity(i&&i.message||""),e.reportValidity()}},a=function(e,t){var a=function(a){var i=t.fields[a];i&&i.ref&&"reportValidity"in i.ref?r(i.ref,a,e):i.refs&&i.refs.forEach(function(t){return r(t,a,e)})};for(var i in t.fields)a(i)},i=function(e,r){r.shouldUseNativeValidation&&a(e,r);var i={};for(var o in e){var n=(0,t.get)(r.fields,o),d=Object.assign(e[o]||{},{ref:n&&n.ref});if(l(r.names||Object.keys(e),o)){var c=Object.assign({},s((0,t.get)(i,o)));(0,t.set)(c,"root",d),(0,t.set)(i,o,c)}else(0,t.set)(i,o,d)}return i},s=function(e){return Array.isArray(e)?e.filter(Boolean):[]},l=function(e,t){return e.some(function(e){return e.startsWith(t+".")})},o=function(e,r){for(var a={};e.length;){var i=e[0],s=i.code,l=i.message,o=i.path.join(".");if(!a[o])if("unionErrors"in i){var n=i.unionErrors[0].errors[0];a[o]={message:n.message,type:n.code}}else a[o]={message:l,type:s};if("unionErrors"in i&&i.unionErrors.forEach(function(t){return t.errors.forEach(function(t){return e.push(t)})}),r){var d=a[o].types,c=d&&d[i.code];a[o]=(0,t.appendErrors)(o,r,a,s,c?[].concat(c,i.message):i.message)}e.shift()}return a};e.s(["zodResolver",0,function(e,t,r){return void 0===r&&(r={}),function(s,l,n){try{return Promise.resolve(function(i){try{var l=Promise.resolve(e["sync"===r.mode?"parse":"parseAsync"](s,t)).then(function(e){return n.shouldUseNativeValidation&&a({},n),{errors:{},values:r.raw?s:e}})}catch(e){return i(e)}return l&&l.then?l.then(void 0,i):l}(function(e){if(null!=e.errors)return{values:{},errors:i(o(e.errors,!n.shouldUseNativeValidation&&"all"===n.criteriaMode),n)};throw e}))}catch(e){return Promise.reject(e)}}}],344580)},938933,e=>{"use strict";var t=e.i(416340);let r={bg:{brand:{primary:"bg-purple-600",secondary:"bg-purple-200"}},text:{brand:"text-purple-600",body:"text-foreground-light",title:"text-foreground"},border:{brand:"border-brand-600",primary:"border-default",secondary:"border-secondary",alternative:"border-alternative"},placeholder:"placeholder-foreground-muted",focus:`
    outline-hidden
    focus:ring-current focus:ring-2
  `,"focus-visible":`
    outline-hidden
    transition-all
    outline-0
    focus-visible:outline-4
    focus-visible:outline-offset-1
  `,size:{text:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"},padding:{tiny:"px-2.5 py-1",small:"px-3 py-2",medium:"px-4 py-2",large:"px-4 py-2",xlarge:"px-6 py-3"}},overlay:{base:"absolute inset-0 bg-background opacity-50",container:"fixed inset-0 transition-opacity"}},a={tiny:`${r.size.text.tiny} ${r.size.padding.tiny}`,small:`${r.size.text.small} ${r.size.padding.small}`,medium:`${r.size.text.medium} ${r.size.padding.medium}`,large:`${r.size.text.large} ${r.size.padding.large}`,xlarge:`${r.size.text.xlarge} ${r.size.padding.xlarge}`},i={card:{base:`
      bg-surface-100

      border
      ${r.border.primary}

      flex flex-col
      rounded-md shadow-lg overflow-hidden relative
    `,hoverable:"transition hover:-translate-y-1 hover:shadow-2xl",head:`px-8 py-6 flex justify-between
    border-b
      ${r.border.primary} `,content:"p-8"},tabs:{base:"w-full justify-between space-y-4",underlined:{list:`
        flex items-center border-b
        ${r.border.secondary}
        `,base:`
        relative
        cursor-pointer
        text-foreground-lighter
        flex
        items-center
        space-x-2
        text-center
        transition
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
      `,inactive:`
        hover:text-foreground
      `,active:`
        !text-foreground
        border-b-2 border-foreground
      `},pills:{list:"flex space-x-1",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-xs
        rounded-sm
        border
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-background
        border-strong hover:border-foreground-muted
        text-foreground-muted hover:text-foreground
      `,active:`
        bg-selection
        text-foreground
        border-stronger
      `},"rounded-pills":{list:"flex flex-wrap gap-2",base:`
        relative
        cursor-pointer
        flex
        items-center
        space-x-2
        text-center
        transition
        shadow-xs
        rounded-full
        focus:outline-hidden
        focus-visible:ring-3
        focus-visible:ring-foreground-muted
        focus-visible:border-foreground-muted
        `,inactive:`
        bg-surface-200 hover:bg-surface-300
        hover:border-foreground-lighter
        text-foreground-lighter hover:text-foreground
      `,active:`
        bg-foreground
        text-background
        border-foreground
      `},block:"w-full flex items-center justify-center",size:{...a},scrollable:"overflow-auto whitespace-nowrap no-scrollbar mask-fadeout-right",wrappable:"flex-wrap",content:"focus:outline-hidden transition-height"},input:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      transition-all
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      group
    `,variants:{standard:`
        bg-foreground/[.026]
        border border-control
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},container:"relative",with_icon:{tiny:"pl-7",small:"pl-8",medium:"pl-8",large:"pl-10",xlarge:"pl-11"},size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",textarea_actions_container:"absolute inset-y-1.5 right-0 pl-3 pr-1 flex space-x-1 items-start",textarea_actions_container_items:"flex items-center"},sidepanel:{base:`
      z-50
      bg-dash-sidebar
      flex flex-col
      fixed
      inset-y-0
      h-full lg:h-screen
      border-l
      shadow-xl
    `,header:`
      flex items-center
      space-y-1 py-4 px-4 bg-dash-sidebar sm:px-6
      border-b h-(--header-height)
    `,contents:`
      relative
      flex-1
      overflow-y-auto
    `,content:`
      px-4 sm:px-6
    `,footer:`
      flex justify-end gap-2
      p-4 bg-overlay
      border-t
    `,size:{medium:"w-screen max-w-md h-full",large:"w-screen max-w-2xl h-full",xlarge:"w-screen max-w-3xl h-full",xxlarge:"w-screen max-w-4xl h-full",xxxlarge:"w-screen max-w-5xl h-full",xxxxlarge:"w-screen max-w-6xl h-full"},align:{left:`
        left-0
        data-open:animate-panel-slide-left-out
        data-closed:animate-panel-slide-left-in
      `,right:`
        right-0
        data-open:animate-panel-slide-right-out
        data-closed:animate-panel-slide-right-in
      `},separator:`
      w-full
      h-px
      my-2
      bg-border
    `,overlay:`
      z-50
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,trigger:`
      border-none bg-transparent p-0 focus:ring-0
    `},form_layout:{container:"grid gap-2",flex:{left:{base:"flex flex-row gap-6",content:"",labels:"order-2",data_input:"order-1"},right:{base:"flex flex-row gap-6 justify-between",content:"order-last",labels:"",data_input:"text-right"}},responsive:"md:grid md:grid-cols-12",non_responsive:"grid grid-cols-12 gap-2",labels_horizontal_layout:"flex flex-row space-x-2 justify-between col-span-12",labels_vertical_layout:"flex flex-col space-y-2 col-span-4",data_input_horizontal_layout:"col-span-12",non_box_data_input_spacing_vertical:"my-3",non_box_data_input_spacing_horizontal:"my-3 md:mt-0 mb-3",data_input_vertical_layout:"col-span-8",data_input_vertical_layout__align_right:"text-right",label:{base:"block text-foreground-light",size:{...r.size.text}},label_optional:{base:"text-foreground-lighter",size:{...r.size.text}},description:{base:"mt-2 text-foreground-lighter leading-normal",size:{...r.size.text}},label_before:{base:"text-foreground-lighter ",size:{...r.size.text}},label_after:{base:"text-foreground-lighter",size:{...r.size.text}},error:{base:`
        text-red-900
        transition-all
        data-show:mt-2
        data-show:animate-slide-down-normal
        data-hide:animate-slide-up-normal
      `,size:{...r.size.text}},size:{tiny:"text-xs",small:"text-base md:text-sm leading-4",medium:"text-base md:text-sm",large:"text-base",xlarge:"text-base"}},menu:{item:{base:`
        cursor-pointer
        flex space-x-3 items-center
        outline-hidden
        focus-visible:ring-1 ring-foreground-muted focus-visible:z-10
        group
      `,content:{base:"transition truncate text-sm w-full",normal:"text-foreground-light group-hover:text-foreground",active:"text-foreground font-semibold"},icon:{base:"transition truncate text-sm",normal:"text-foreground-lighter group-hover:text-foreground-light",active:"text-foreground"},variants:{text:{base:`
            py-1
          `,normal:`
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold
            text-foreground-muted
            z-10
          `},border:{base:`
            px-4 py-1
          `,normal:`
            border-l
            font-normal
            border-default
            group-hover:border-foreground-muted`,active:`
            font-semibold

            text-foreground-muted
            z-10

            border-l
            border-brand
            group-hover:border-brand
          `,rounded:"rounded-md"},pills:{base:"my-px px-3 py-[3px] rounded-md transition-colors active:bg-sidebar-accent/50",normal:`
            font-normal
            border-default
            hover:bg-sidebar-accent/50
            group-hover:border-foreground-muted`,active:`
            font-semibold
            bg-sidebar-accent
            text-foreground-lighter
            z-10 rounded-md
          `}}},group:{base:`
        flex space-x-3
        mb-2
        font-normal
      `,icon:"text-foreground-lighter",content:"text-sm text-foreground-lighter w-full",variants:{text:"",pills:"px-3",border:""}}},modal:{base:`
      relative
      bg-dash-sidebar
      my-4 max-w-screen
      border border-overlay
      rounded-md
      shadow-xl
      data-open:animate-overlay-show
      data-closed:animate-overlay-hide

    `,header:`
      bg-surface-200
      space-y-1 py-3 px-4 sm:px-5
      border-b border-overlay
      flex items-center justify-between
    `,footer:`
      flex justify-end gap-2
      py-3 px-5
      border-t border-overlay
    `,size:{tiny:"sm:align-middle sm:w-full sm:max-w-xs",small:"sm:align-middle sm:w-full sm:max-w-sm",medium:"sm:align-middle sm:w-full sm:max-w-lg",large:"sm:align-middle sm:w-full md:max-w-xl",xlarge:"sm:align-middle sm:w-full md:max-w-3xl",xxlarge:"sm:align-middle sm:w-full max-w-screen md:max-w-6xl",xxxlarge:"sm:align-middle sm:w-full md:max-w-7xl"},overlay:`
      z-40
      fixed
      bg-alternative
      h-full w-full
      left-0
      top-0
      opacity-75
      data-closed:animate-fade-out-overlay-bg
      data-open:animate-fade-in-overlay-bg
    `,scroll_overlay:`
      z-40
      fixed
      inset-0
      grid
      place-items-center
      overflow-y-auto
      data-open:animate-overlay-show data-closed:animate-overlay-hide
    `,separator:`
      w-full
      h-px
      my-2
      bg-border-overlay
    `,content:"px-5"},listbox:{base:`
      block
      box-border
      w-full
      rounded-md
      shadow-xs
      text-foreground
      border
      focus-visible:shadow-md
      ${r.focus}
      focus-visible:border-foreground-muted
      focus-visible:ring-background-control
      ${r.placeholder}
      indent-px
      transition-all
      bg-none
    `,container:"relative",label:"truncate",variants:{standard:`
        bg-control
        border border-control

        aria-expanded:border-foreground-muted
        aria-expanded:ring-border-muted
        aria-expanded:ring-2
        `,error:`
        bg-destructive-200
        border border-destructive-500
        focus:ring-destructive-400
        placeholder:text-destructive-400
       `},options_container_animate:`
      transition
      data-open:animate-slide-down
      data-open:opacity-1
      data-closed:animate-slide-up
      data-closed:opacity-0
    `,options_container:`
      bg-overlay
      shadow-lg
      border border-solid
      border-overlay max-h-60
      rounded-md py-1 text-base
      sm:text-sm z-10 overflow-hidden overflow-y-scroll

      origin-dropdown
      data-open:animate-dropdown-content-show
      data-closed:animate-dropdown-content-hide
    `,with_icon:"pl-2",addOnBefore:`
      w-full flex flex-row items-center space-x-3
    `,size:{...a},disabled:"opacity-50",actions_container:"absolute inset-y-0 right-0 pl-3 pr-1 flex space-x-1 items-center",chevron_container:"absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none",chevron:"h-5 w-5 text-foreground-muted",option:`
      w-listbox
      transition cursor-pointer select-none relative py-2 pl-3 pr-9
      text-foreground-light
      text-sm
      hover:bg-border-overlay
      focus:bg-border-overlay
      focus:text-foreground
      border-none
      focus:outline-hidden
    `,option_active:"text-foreground bg-selection",option_disabled:"cursor-not-allowed opacity-60",option_inner:"flex items-center space-x-3",option_check:"absolute inset-y-0 right-0 flex items-center pr-3 text-brand",option_check_active:"text-brand",option_check_icon:"h-5 w-5"},inputErrorIcon:{base:`
      flex items-center
      right-3 pr-2 pl-2
      inset-y-0
      pointer-events-none
      text-red-900
    `},inputIconContainer:{base:`
    absolute inset-y-0
    left-0 pl-2 flex
    items-center pointer-events-none
    text-foreground-light
    [&_svg]:stroke-[1.5]
    `,size:{tiny:"[&_svg]:h-[14px] [&_svg]:w-[14px]",small:"[&_svg]:h-[18px] [&_svg]:w-[18px]",medium:"[&_svg]:h-[20px] [&_svg]:w-[20px]",large:"[&_svg]:h-[20px] [&_svg]:w-[20px] pl-3",xlarge:"[&_svg]:h-[24px] [&_svg]:w-[24px] pl-3",xxlarge:"[&_svg]:h-[30px] [&_svg]:w-[30px] pl-3",xxxlarge:"[&_svg]:h-[42px] [&_svg]:w-[42px] pl-3"}},icon:{container:"shrink-0 flex items-center justify-center rounded-full p-3"},loading:{base:"relative",content:{base:"transition-opacity duration-300",active:"opacity-40"},spinner:`
      absolute
      text-foreground-lighter animate-spin
      inset-0
      size-5
      m-auto
    `}},s=(0,t.createContext)({theme:i});e.s(["default",0,function(e){let{theme:{[e]:r}}=(0,t.useContext)(s);return JSON.parse(r=JSON.stringify(r).replace(/\\n/g,"").replace(/\s\s+/g," "))}],938933)},202003,e=>{"use strict";e.s(["buildStudioPageTitle",0,e=>{let t=[e.entity,e.section,e.surface,e.project,e.org,e.brand],r=[];return t.forEach(e=>{let t=(e=>{if(void 0===e)return;let t=e.trim().replace(/\s+/g," ");if(0!==t.length)return t.length<=60?t:`${t.slice(0,59).trimEnd()}…`})(e);if(!t)return;let a=r[r.length-1];(void 0===a||a.toLowerCase()!==t.toLowerCase())&&r.push(t)}),r.join(" | ")}])},22194,e=>{"use strict";var t=e.i(221628);e.i(481541);var r=e.i(665265),r=r,a=e.i(188139),i=e.i(416340),s=e.i(843778);e.s(["ProfileImage",0,({alt:e,src:l,placeholder:o,className:n})=>{let[d,c]=(0,i.useState)(!1);return l&&!d?(0,t.jsx)(a.default,{alt:e??"",src:l,width:"24",height:"24",className:(0,s.cn)("aspect-square bg-foreground rounded-full object-cover",n),onError:()=>c(!0)}):o??(0,t.jsx)("figure",{className:(0,s.cn)("bg-foreground rounded-full flex items-center justify-center",n),children:(0,t.jsx)(r.default,{size:18,strokeWidth:1.5,className:"text-background"})})}],22194)},744061,e=>{"use strict";var t=e.i(221628),r=e.i(938933),a=e.i(843778);function i({children:e,tag:r="div",style:a}){let s=`${r}`;return(0,t.jsx)(s,{style:a,children:e})}i.Title=function({level:e=1,children:r,style:a}){let i=`h${e}`;return(0,t.jsx)(i,{style:a,children:r})},i.Text=function({children:e,style:r,mark:a,code:i,keyboard:s,strong:l}){return i?(0,t.jsx)("code",{style:r,children:e}):a?(0,t.jsx)("mark",{style:r,children:e}):s?(0,t.jsx)("kbd",{style:r,children:e}):l?(0,t.jsx)("strong",{style:r,children:e}):(0,t.jsx)("span",{style:r,children:e})},i.Link=function({children:e,target:r="_blank",href:a,onClick:i,style:s}){return(0,t.jsx)("a",{onClick:i,href:a,target:r,rel:"noopener noreferrer",style:s,children:e})};var s=e.i(416340);let l=(0,s.createContext)({type:"text"}),o=e=>{let{type:r}=e;return(0,t.jsx)(l.Provider,{value:{type:r},children:e.children})},n=()=>{let e=(0,s.useContext)(l);if(void 0===e)throw Error("MenuContext must be used within a MenuContextProvider.");return e};function d({children:e,className:r,ulClassName:a,style:i,type:s="text"}){return(0,t.jsx)("nav",{role:"menu","aria-label":"Sidebar","aria-orientation":"vertical","aria-labelledby":"options-menu",className:r,style:i,children:(0,t.jsx)(o,{type:s,children:(0,t.jsx)("ul",{className:a,children:e})})})}d.Item=function({children:e,icon:i,active:s,onClick:l,style:o}){let d=(0,r.default)("menu"),{type:c}=n(),u=[d.item.base];u.push(d.item.variants[c].base),s?u.push(d.item.variants[c].active):u.push(d.item.variants[c].normal);let m=[d.item.content.base];s?m.push(d.item.content.active):m.push(d.item.content.normal);let f=[d.item.icon.base];return s?f.push(d.item.icon.active):f.push(d.item.icon.normal),(0,t.jsxs)("li",{role:"menuitem",className:(0,a.cn)("outline-hidden",u),style:o,onClick:l,"aria-current":s?"page":void 0,children:[i&&(0,t.jsx)("div",{className:`${f.join(" ")} min-w-fit`,children:i}),(0,t.jsx)("span",{className:m.join(" "),children:e})]})},d.Group=function({children:e,icon:a,title:i}){let s=(0,r.default)("menu"),{type:l}=n();return(0,t.jsxs)("div",{className:[s.group.base,s.group.variants[l]].join(" "),children:[a&&(0,t.jsx)("span",{className:s.group.icon,children:a}),(0,t.jsx)("span",{className:s.group.content,children:i}),e]})},d.Misc=function({children:e}){return(0,t.jsx)("div",{children:(0,t.jsx)(i.Text,{children:(0,t.jsx)("span",{children:e})})})},e.s(["default",0,d],744061)},862326,e=>{"use strict";var t=e.i(744061);e.s(["Menu",()=>t.default])},388147,e=>{"use strict";var t=e.i(221628),r=e.i(587433),a=e.i(862326),i=e.i(561978),s=e.i(837710),l=e.i(654894);let o=({item:e,isActive:o,target:n="_self",hoverText:d="",onClick:c})=>{let{name:u="",url:m="",icon:f,rightIcon:x,isExternal:g,label:p,disabled:h,shortcutId:b}=e,v=(0,t.jsx)(a.Menu.Item,{icon:f,active:o,onClick:c,children:(0,t.jsxs)("div",{className:"flex w-full items-center justify-between gap-1",children:[(0,t.jsxs)("div",{className:"flex items-center gap-1 min-w-0 flex-1",title:b?void 0:d||("string"==typeof u?u:""),children:[(0,t.jsx)("span",{className:"truncate flex-1 min-w-0",children:u}),void 0!==p&&(0,t.jsx)(r.Badge,{className:"shrink-0",variant:"new"===p.toLowerCase()?"success":"warning",children:p})]}),x&&(0,t.jsx)("div",{children:x})]})});if(h)return(0,t.jsx)("div",{className:"opacity-50 pointer-events-none",children:v});if(m){if(g){let e=(0,t.jsx)(s.Button,{asChild:!0,block:!0,className:"justify-start!",type:"text",size:"small",icon:f,children:(0,t.jsx)(i.default,{href:m,target:"_blank",rel:"noreferrer",children:u})});return b?(0,t.jsx)(l.ShortcutTooltip,{shortcutId:b,side:"right",delayDuration:1e3,children:e}):e}let e=(0,t.jsx)(i.default,{href:m,className:"block",target:n,onClick:c,children:v});return b?(0,t.jsx)(l.ShortcutTooltip,{shortcutId:b,side:"right",delayDuration:1e3,children:e}):e}return v};e.s(["ProductMenu",0,({page:e,menu:i,onItemClick:s})=>(0,t.jsx)("div",{className:"flex flex-col space-y-4",children:(0,t.jsx)(a.Menu,{type:"pills",children:i.map((l,n)=>(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"my-4 space-y-4",children:(0,t.jsxs)("div",{className:"md:mx-3",children:[(0,t.jsx)(a.Menu.Group,{title:l.title?(0,t.jsxs)("div",{className:"flex flex-col space-y-2 uppercase font-mono",children:[(0,t.jsx)("span",{children:l.title}),l.isPreview&&(0,t.jsx)(r.Badge,{variant:"warning",children:"Not production ready"})]}):null}),(0,t.jsx)("div",{children:l.items.map(r=>{let a=r.pages?r.pages.includes(e??""):e===r.key;return(0,t.jsx)(o,{item:r,isActive:a,target:r.isExternal?"_blank":"_self",onClick:s},r.key)})})]})}),n!==i.length-1&&(0,t.jsx)("div",{className:"h-px w-[calc(100%-1.5rem)] mx-auto md:w-full bg-border-overlay"})]},l.key||l.title))})})],388147)},3259,720512,e=>{"use strict";var t=e.i(221628),r=e.i(335032),a=e.i(631700);e.s(["ChevronRightIcon",()=>a.default],720512);var a=a,i=e.i(416340),s=e.i(843778);let l=i.forwardRef(({...e},r)=>(0,t.jsx)("nav",{ref:r,"aria-label":"breadcrumb",...e}));l.displayName="Breadcrumb";let o=i.forwardRef(({className:e,...r},a)=>(0,t.jsx)("ol",{ref:a,className:(0,s.cn)("flex flex-wrap items-center gap-0.5 wrap-break-word text-sm text-muted-foreground sm:gap-1.5",e),...r}));o.displayName="BreadcrumbList";let n=i.forwardRef(({className:e,...r},a)=>(0,t.jsx)("li",{ref:a,className:(0,s.cn)("inline-flex text-foreground-lighter items-center gap-1.5 leading-5",e),...r}));n.displayName="BreadcrumbItem";let d=i.forwardRef(({asChild:e,className:a,...i},l)=>{let o=e?r.Slot.Slot:"a";return(0,t.jsx)(o,{ref:l,className:(0,s.cn)("transition-colors underline lg:no-underline hover:text-foreground",a),...i})});d.displayName="BreadcrumbLink";let c=i.forwardRef(({className:e,...r},a)=>(0,t.jsx)("span",{ref:a,role:"link","aria-disabled":"true","aria-current":"page",className:(0,s.cn)("no-underline text-foreground",e),...r}));c.displayName="BreadcrumbPage";let u=({children:e,className:r,...i})=>(0,t.jsx)("li",{role:"presentation","aria-hidden":"true",className:(0,s.cn)("[&>svg]:size-3.5 text-foreground-muted",r),...i,children:e??(0,t.jsx)(a.default,{})});u.displayName="BreadcrumbSeparator";let m=({className:e,...r})=>(0,t.jsxs)("span",{className:(0,s.cn)("flex h-4 w-4 items-center justify-center",e),...r,children:[(0,t.jsx)("svg",{role:"presentation","aria-hidden":"true",width:"15",height:"15",viewBox:"0 0 15 15",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:(0,t.jsx)("path",{d:"M3.625 7.5C3.625 8.12132 3.12132 8.625 2.5 8.625C1.87868 8.625 1.375 8.12132 1.375 7.5C1.375 6.87868 1.87868 6.375 2.5 6.375C3.12132 6.375 3.625 6.87868 3.625 7.5ZM8.625 7.5C8.625 8.12132 8.12132 8.625 7.5 8.625C6.87868 8.625 6.375 8.12132 6.375 7.5C6.375 6.87868 6.87868 6.375 7.5 6.375C8.12132 6.375 8.625 6.87868 8.625 7.5ZM12.5 8.625C13.1213 8.625 13.625 8.12132 13.625 7.5C13.625 6.87868 13.1213 6.375 12.5 6.375C11.8787 6.375 11.375 6.87868 11.375 7.5C11.375 8.12132 11.8787 8.625 12.5 8.625Z",fill:"currentColor",fillRule:"evenodd",clipRule:"evenodd"})}),(0,t.jsx)("span",{className:"sr-only",children:"More"})]});m.displayName="BreadcrumbEllipsis",e.s(["Breadcrumb",0,l,"BreadcrumbEllipsis",0,m,"BreadcrumbItem",0,n,"BreadcrumbLink",0,d,"BreadcrumbList",0,o,"BreadcrumbPage",0,c,"BreadcrumbSeparator",0,u],3259)},127739,e=>{"use strict";var t=e.i(221628),r=e.i(766181),a=e.i(416340),i=e.i(843778);let s=(0,r.cva)(["mx-auto w-full @container px-6 xl:px-10"],{variants:{size:{small:"max-w-[768px]",default:"max-w-[1200px]",large:"max-w-[1600px]",full:"max-w-none"}},defaultVariants:{size:"default"}}),l=(0,a.forwardRef)(({className:e,size:r,...a},l)=>(0,t.jsx)("div",{ref:l,...a,className:(0,i.cn)(s({size:r}),e)}));l.displayName="PageContainer",e.s(["PageContainer",0,l])},785951,e=>{"use strict";var t=e.i(221628);e.i(128328);var r=e.i(158639),a=e.i(896779),i=e.i(825713),s=e.i(657588),l=e.i(912793),o=e.i(10429),n=e.i(368136);let d=()=>{let{ref:e}=(0,r.useParams)(),t=(0,s.useFlag)("authOverviewPage"),a=(0,s.useFlag)("enablePasskeyAuth"),{authenticationSignInProviders:i,authenticationRateLimits:d,authenticationEmails:c,authenticationMultiFactor:u,authenticationAttackProtection:m,authenticationPerformance:f}=(0,l.useIsFeatureEnabled)(["authentication:sign_in_providers","authentication:rate_limits","authentication:emails","authentication:multi_factor","authentication:attack_protection","authentication:performance"]);return function(e){let{ref:t,isPlatform:r,showOverview:a,features:i}=e,s=!!i.passkeys,l=`/project/${t}/auth`;return[{title:"Manage",items:[...a?[{name:"Overview",key:"overview",url:`${l}/overview`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_OVERVIEW}]:[],{name:"Users",key:"users",url:`${l}/users`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_USERS},...r?[{name:"OAuth Apps",key:"oauth-apps",url:`${l}/oauth-apps`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_OAUTH_APPS}]:[]]},...i.emails&&r?[{title:"Notifications",items:[...i.emails?[{name:"Emails",key:"email",pages:["templates","smtp"],url:`${l}/templates`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_EMAIL}]:[]]}]:[],{title:"Configuration",items:[{name:"Policies",key:"policies",url:`${l}/policies`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_POLICIES},...r?[...i.signInProviders?[{name:"Sign In / Providers",key:"sign-in-up",pages:["providers","third-party"],url:`${l}/providers`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_SIGN_IN}]:[],...s?[{name:"Passkeys",key:"passkeys",url:`${l}/passkeys`,label:"Beta",shortcutId:n.SHORTCUT_IDS.NAV_AUTH_PASSKEYS}]:[],{name:"OAuth Server",key:"oauth-server",url:`${l}/oauth-server`,label:"Beta",shortcutId:n.SHORTCUT_IDS.NAV_AUTH_OAUTH_SERVER},{name:"Sessions",key:"sessions",url:`${l}/sessions`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_SESSIONS},...i.rateLimits?[{name:"Rate Limits",key:"rate-limits",url:`${l}/rate-limits`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_RATE_LIMITS}]:[],...i.multiFactor?[{name:"Multi-Factor",key:"mfa",url:`${l}/mfa`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_MFA}]:[],{name:"URL Configuration",key:"url-configuration",url:`${l}/url-configuration`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_URL_CONFIGURATION},...i.attackProtection?[{name:"Attack Protection",key:"protection",url:`${l}/protection`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_PROTECTION}]:[],{name:"Auth Hooks",key:"hooks",url:`${l}/hooks`,items:[],label:"Beta",shortcutId:n.SHORTCUT_IDS.NAV_AUTH_HOOKS},{name:"Audit Logs",key:"audit-logs",url:`${l}/audit-logs`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_AUDIT_LOGS},...i.performance?[{name:"Performance",key:"performance",url:`${l}/performance`,items:[],shortcutId:n.SHORTCUT_IDS.NAV_AUTH_PERFORMANCE}]:[]]:[]]}]}({ref:e,isPlatform:o.IS_PLATFORM,showOverview:t,features:{signInProviders:i,rateLimits:d,emails:c,multiFactor:u,attackProtection:m,performance:f,passkeys:a}})};var c=e.i(388147),u=e.i(11872),m=e.i(14703);let f=(0,e.i(951138).withAuth)(({title:e,children:s})=>{let l=(0,a.useRouter)(),{ref:o="default"}=(0,r.useParams)();(0,m.useAuthConfigPrefetch)({projectRef:o});let n=l.pathname.split("/")[4],f=d();return(0,t.jsxs)(i.ProjectLayout,{product:"Authentication",browserTitle:{section:e},productMenu:(0,t.jsx)(c.ProductMenu,{page:n,menu:f}),isBlocking:!1,children:[(0,t.jsx)(u.ProductMenuShortcuts,{menu:f}),s]})});e.s(["AuthProductMenu",0,()=>{let e=(0,a.useRouter)(),{ref:i="default"}=(0,r.useParams)();(0,m.useAuthConfigPrefetch)({projectRef:i});let s=e.pathname.split("/")[4],l=d();return(0,t.jsx)(c.ProductMenu,{page:s,menu:l})},"default",0,f],785951)}]);

//# debugId=226dedfb-5c13-45ab-7814-dbea8882ebfb
//# sourceMappingURL=0mza_iylfvb0f.js.map