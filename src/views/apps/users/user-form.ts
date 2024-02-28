// Import necessary modules from Vue
import { defineComponent, ref, onMounted } from 'vue';
import ContentLayout from "./../../../layouts/full/content/form/FormContentLayout.vue";

// Import UserService and apiEndpoints
import RoleService from "@/services/RoleService";
import UserService from "@/services/UserService";
import apiEndpoints from '@/config/config';
const userService = new UserService(apiEndpoints);
const roleService = new RoleService(apiEndpoints);

// Define the user list component
export default defineComponent({
  name: "user-view",
  props: {
    modelValue: Object,
    userId: String,
  },
  data() {
    return {
      config:apiEndpoints ,
      valid: false,
      files: [],
      actions: [
        { title: 'Edit', icon:'mdi-pencil', action: this.viewUser },
        { title: 'Delete', icon:'mdi-delete', action: this.viewUser },
      ],
      rules: {
        username: [
        v => !!v || 'Username is required',
        v => (v && v.length <= 10) || 'Username must be less than 10 characters',
        ],
        password: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
        confirm_password: {
          required: value => !!value || 'Required.',
          min: v => v.length >= 8 || 'Min 8 characters'
        },
        files: {
          required: value => v.length > 0 || 'Required.',
        },
        email: [
          value => {
            if (value) return true
            return 'E-mail is requred.'
          },
          value => {
            if (/.+@.+\..+/.test(value)) return true
            return 'E-mail must be valid.'
          },
          value => {
            return this.checkEmailExists(value);
          }
        ],
      },
      password_visible: true,
      confirm_password_visible: true,
      model: this.modelValue,
      roles:[]
    };
  },
  components: {
    ContentLayout
  },
  methods: {
    remove (item) {
      this.chips.splice(this.chips.indexOf(item), 1)
    },
    async checkEmailExists(value) {
      const result = await userService.checkEmailExisted(value, this.model._id);
      if (result == true) {
        return 'Email is already exist.';
      }
      return true;
    },
    confirmPasswordMatchRule(v) {
      return v === this.model.password || 'Passwords do not match';
    },
    reset() {
      this.$refs.form.reset();
    },
    async validate(): boolean {
      const { valid } = await this.$refs.form.validate();
      return valid;
    },
    getRoles(){
        roleService.getAll().then((response: any) => {
          const rolesArray = Array.from(response);
          rolesArray.forEach((role, index) => {
            this.roles.push(role);
          });
        })
        .catch((error: any) => {
          console.error('Error fetching user data:', error);
        });
    },
    getData(): any { 
        return this.model;
    },
  },
  mounted() {
      this.getRoles();
  },
});
