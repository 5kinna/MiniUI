import bindData from '../../utils/bindData'

Component({
  externalClasses:['mini-com'],
  behaviors: [bindData],
  options: {
    multipleSlots: true 
  },
  properties:{
    value:{type:String,value:''},
    type:{type:String,value:'test'},
    password:{type:Boolean,value:false},
    placeholder:{type:String,value:'请输入'},
    placeStyle:{type:String,value:''},
    placeClass:{type:String,value:'placeClass'},
    disabled:{type:Boolean,value:false},
    maxlength:{type:Number,value:-1},
    cursorSpacing:{type:Number,value:0},
    focus:{type:Boolean,value:false},
    cursor:{type:Number,value:0},
    selectionStart:{type:Number,value:-1},
    selectionEnd:{type:Number,value:-1},
    adjustPosition:{type:Boolean,value:true},
    clear:{type:Boolean,value:false}
  },
  data: {
  },
  methods:{
    onInput(e){
      const value = e.detail.value
      this.triggerEvent('input',value)
      this.properties.syncAttrMap && this.setDataSmart('value', value)
    }
  }
})
