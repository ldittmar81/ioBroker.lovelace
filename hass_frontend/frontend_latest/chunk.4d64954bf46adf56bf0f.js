/*! For license information please see chunk.4d64954bf46adf56bf0f.js.LICENSE */
(self.webpackJsonp=self.webpackJsonp||[]).push([[52],{374:function(e,t,i){"use strict";i.r(t);var n=i(3),s=i(0),o=i(93),a=(i(84),i(96)),r=i(86),c=i(6),d=i(4),h=i(5),l=null;Object(c.a)({_template:d.a`
    <style>
      :host {
        display: block;
        position: fixed;
        background-color: var(--paper-toast-background-color, #323232);
        color: var(--paper-toast-color, #f1f1f1);
        min-height: 48px;
        min-width: 288px;
        padding: 16px 24px;
        box-sizing: border-box;
        box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.26);
        border-radius: 2px;
        margin: 12px;
        font-size: 14px;
        cursor: default;
        -webkit-transition: -webkit-transform 0.3s, opacity 0.3s;
        transition: transform 0.3s, opacity 0.3s;
        opacity: 0;
        -webkit-transform: translateY(100px);
        transform: translateY(100px);
        @apply --paper-font-common-base;
      }

      :host(.capsule) {
        border-radius: 24px;
      }

      :host(.fit-bottom) {
        width: 100%;
        min-width: 0;
        border-radius: 0;
        margin: 0;
      }

      :host(.paper-toast-open) {
        opacity: 1;
        -webkit-transform: translateY(0px);
        transform: translateY(0px);
      }
    </style>

    <span id="label">{{text}}</span>
    <slot></slot>
`,is:"paper-toast",behaviors:[r.a],properties:{fitInto:{type:Object,value:window,observer:"_onFitIntoChanged"},horizontalAlign:{type:String,value:"left"},verticalAlign:{type:String,value:"bottom"},duration:{type:Number,value:3e3},text:{type:String,value:""},noCancelOnOutsideClick:{type:Boolean,value:!0},noAutoFocus:{type:Boolean,value:!0}},listeners:{transitionend:"__onTransitionEnd"},get visible(){return h.a._warn("`visible` is deprecated, use `opened` instead"),this.opened},get _canAutoClose(){return this.duration>0&&this.duration!==1/0},created:function(){this._autoClose=null,a.a.requestAvailability()},show:function(e){for(var t in"string"==typeof e&&(e={text:e}),e)0===t.indexOf("_")?h.a._warn('The property "'+t+'" is private and was not set.'):t in this?this[t]=e[t]:h.a._warn('The property "'+t+'" is not valid.');this.open()},hide:function(){this.close()},__onTransitionEnd:function(e){e&&e.target===this&&"opacity"===e.propertyName&&(this.opened?this._finishRenderOpened():this._finishRenderClosed())},_openedChanged:function(){null!==this._autoClose&&(this.cancelAsync(this._autoClose),this._autoClose=null),this.opened?(l&&l!==this&&l.close(),l=this,this.fire("iron-announce",{text:this.text}),this._canAutoClose&&(this._autoClose=this.async(this.close,this.duration))):l===this&&(l=null),r.b._openedChanged.apply(this,arguments)},_renderOpened:function(){this.classList.add("paper-toast-open")},_renderClosed:function(){this.classList.remove("paper-toast-open")},_onFitIntoChanged:function(e){this.positionTarget=e}});const u=customElements.get("paper-toast");customElements.define("ha-toast",class extends u{connectedCallback(){super.connectedCallback(),this._resizeListener||(this._resizeListener=e=>this.classList.toggle("fit-bottom",e.matches),this._mediaq=window.matchMedia("(max-width: 599px")),this._mediaq.addListener(this._resizeListener),this._resizeListener(this._mediaq)}disconnectedCallback(){super.disconnectedCallback(),this._mediaq.removeListener(this._resizeListener)}});class p extends s.a{constructor(){super(...arguments),this._noCancelOnOutsideClick=!1}async showDialog({message:e,action:t,duration:i,dismissable:n}){let s=this._toast;s||(await this.updateComplete,s=this._toast),s.setAttribute("dir",Object(o.a)(this.hass)?"rtl":"ltr"),this._action=t||void 0,this._noCancelOnOutsideClick=void 0!==n&&!n,s.hide(),s.show({text:e,duration:void 0===i?3e3:i})}render(){return s.e`
      <ha-toast .noCancelOnOutsideClick=${this._noCancelOnOutsideClick}>
        ${this._action?s.e`
              <mwc-button
                .label=${this._action.text}
                @click=${this.buttonClicked}
              ></mwc-button>
            `:""}
      </ha-toast>
    `}buttonClicked(){this._toast.hide(),this._action&&this._action.action()}static get styles(){return s.c`
      mwc-button {
        color: var(--primary-color);
        font-weight: bold;
      }
    `}}n.b([Object(s.f)()],p.prototype,"hass",void 0),n.b([Object(s.f)()],p.prototype,"_action",void 0),n.b([Object(s.f)()],p.prototype,"_noCancelOnOutsideClick",void 0),n.b([Object(s.g)("ha-toast")],p.prototype,"_toast",void 0),customElements.define("notification-manager",p)},94:function(e,t,i){"use strict";i.d(t,"a",function(){return a});i(5);var n=i(2),s=i(10),o=new Set;const a={properties:{_parentResizable:{type:Object,observer:"_parentResizableChanged"},_notifyingDescendant:{type:Boolean,value:!1}},listeners:{"iron-request-resize-notifications":"_onIronRequestResizeNotifications"},created:function(){this._interestedResizables=[],this._boundNotifyResize=this.notifyResize.bind(this),this._boundOnDescendantIronResize=this._onDescendantIronResize.bind(this)},attached:function(){this._requestResizeNotifications()},detached:function(){this._parentResizable?this._parentResizable.stopResizeNotificationsFor(this):(o.delete(this),window.removeEventListener("resize",this._boundNotifyResize)),this._parentResizable=null},notifyResize:function(){this.isAttached&&(this._interestedResizables.forEach(function(e){this.resizerShouldNotify(e)&&this._notifyDescendant(e)},this),this._fireResize())},assignParentResizable:function(e){this._parentResizable&&this._parentResizable.stopResizeNotificationsFor(this),this._parentResizable=e,e&&-1===e._interestedResizables.indexOf(this)&&(e._interestedResizables.push(this),e._subscribeIronResize(this))},stopResizeNotificationsFor:function(e){var t=this._interestedResizables.indexOf(e);t>-1&&(this._interestedResizables.splice(t,1),this._unsubscribeIronResize(e))},_subscribeIronResize:function(e){e.addEventListener("iron-resize",this._boundOnDescendantIronResize)},_unsubscribeIronResize:function(e){e.removeEventListener("iron-resize",this._boundOnDescendantIronResize)},resizerShouldNotify:function(e){return!0},_onDescendantIronResize:function(e){this._notifyingDescendant?e.stopPropagation():s.g||this._fireResize()},_fireResize:function(){this.fire("iron-resize",null,{node:this,bubbles:!1})},_onIronRequestResizeNotifications:function(e){var t=Object(n.a)(e).rootTarget;t!==this&&(t.assignParentResizable(this),this._notifyDescendant(t),e.stopPropagation())},_parentResizableChanged:function(e){e&&window.removeEventListener("resize",this._boundNotifyResize)},_notifyDescendant:function(e){this.isAttached&&(this._notifyingDescendant=!0,e.notifyResize(),this._notifyingDescendant=!1)},_requestResizeNotifications:function(){if(this.isAttached)if("loading"===document.readyState){var e=this._requestResizeNotifications.bind(this);document.addEventListener("readystatechange",function t(){document.removeEventListener("readystatechange",t),e()})}else this._findParent(),this._parentResizable?this._parentResizable._interestedResizables.forEach(function(e){e!==this&&e._findParent()},this):(o.forEach(function(e){e!==this&&e._findParent()},this),window.addEventListener("resize",this._boundNotifyResize),this.notifyResize())},_findParent:function(){this.assignParentResizable(null),this.fire("iron-request-resize-notifications",null,{node:this,bubbles:!0,cancelable:!0}),this._parentResizable?o.delete(this):o.add(this)}}},96:function(e,t,i){"use strict";i.d(t,"a",function(){return o});i(5);var n=i(6),s=i(4);const o=Object(n.a)({_template:s.a`
    <style>
      :host {
        display: inline-block;
        position: fixed;
        clip: rect(0px,0px,0px,0px);
      }
    </style>
    <div aria-live$="[[mode]]">[[_text]]</div>
`,is:"iron-a11y-announcer",properties:{mode:{type:String,value:"polite"},_text:{type:String,value:""}},created:function(){o.instance||(o.instance=this),document.body.addEventListener("iron-announce",this._onIronAnnounce.bind(this))},announce:function(e){this._text="",this.async(function(){this._text=e},100)},_onIronAnnounce:function(e){e.detail&&e.detail.text&&this.announce(e.detail.text)}});o.instance=null,o.requestAvailability=function(){o.instance||(o.instance=document.createElement("iron-a11y-announcer")),document.body.appendChild(o.instance)}}}]);
//# sourceMappingURL=chunk.4d64954bf46adf56bf0f.js.map