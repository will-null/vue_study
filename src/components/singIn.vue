<template>
    <div id="login">
    <form :model="ruleForm" status-icon :rules="rules" ref="ruleForm" label-width="100px" class="demo-ruleForm">
        <label prop="username">用户名
            <input type="password" v-model="ruleForm.pass" autocomplete="off"/>
        </label>
        <label prop="password">密码
            <input type="password" v-model="ruleForm.checkPass" autocomplete="off"/>
        </label>


            <button type="primary" @click="submitForm('ruleForm')">提交</button>
            <button @click="resetForm('ruleForm')">重置</button>

    </form>
    </div>
</template>

<script>
    export default {
        data() {
            var validatePass = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入用户名'));
                } else {
                    if (this.ruleForm.pass !== '') {
                        this.$refs.ruleForm.validateField('pass');
                    }
                    callback();
                }
            };
            var validatePass2 = (rule, value, callback) => {
                if (value === '') {
                    callback(new Error('请输入密码'));
                } else if (value !== this.ruleForm.checkPass) {
                    callback(new Error('两次输入密码不一致!'));
                } else {
                    callback();
                }
            };
            return {
                ruleForm: {
                    username:'',
                    password:''
                },
                rules: {
                    username: [
                        {validator: validatePass, trigger: 'blur'}
                    ],
                    password: [
                        {validator: validatePass2, trigger: 'blur'}
                    ]
                }
            };
        },
        methods: {
            submitForm(formName) {
                this.$refs[formName].validate((valid) => {
                    if (valid) {
                        alert('submit!');
                    } else {
                        console.log('error submit!!');
                        return false;
                    }
                });
            },
            resetForm(formName) {
                this.$refs[formName].resetFields();
            }
        }
    }
</script>