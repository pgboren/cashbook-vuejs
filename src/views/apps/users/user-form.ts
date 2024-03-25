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
  emits: ['update:modelValue'],
  watch: {
    modelValue: {
      immediate: true,
      handler(newVal) {
        this.model = newVal;
      },
    },
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
          (        value: any) => !!value || 'Username is required',
          (        value: string | any[]) => (value && value.length <= 10) || 'Username must be less than 10 characters',
        (        value: any) => {
          return this.checkUsernameExists(value);
        }
        ],
        password: {
          required: (value: any) => !!value || 'Required.',
          min: (v: string | any[]) => v.length >= 8 || 'Min 8 characters'
        },
        confirm_password: {
          required: (value: any) => !!value || 'Required.',
          min: (v: string | any[]) => v.length >= 8 || 'Min 8 characters'
        },
        files: {
          required: (value: any) => v.length > 0 || 'Required.',
        },
        email: [
          (          value: any) => {
            if (value) return true
            return 'E-mail is requred.'
          },
          (          value: string) => {
            if (/.+@.+\..+/.test(value)) return true
            return 'E-mail must be valid.'
          },
          (          value: any) => {
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
    
    async checkEmailExists(email: string) {
      const result = await userService.checkEmailExisted(email, this.model._id);
      if (result == true) {
        return 'Email is already exist.';
      }
      return true;
    },
    async checkUsernameExists(name: string) {
      const result = await userService.checkUsernameExisted(name, this.model._id);
      if (result == true) {
        return 'Username is already exist.';
      }
      return true;
    },
    confirmPasswordMatchRule(v: string) {
      return v === this.model.password || 'Passwords do not match';
    },
    reset() {
      const form = this.$refs.form as HTMLFormElement;
      form.reset();
    },
    getData() {
      const data: User = {
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        enable: false,
        roles: []
      };
      data.username = this.model?.username;
      data.email = this.model?.email;
      data.password = this.model?.password;
      data.confirmPassword = this.model?.confirmPassword;
      data.enable = this.model?.enable;
      data.roles = this.model?.roles.map((role: { _id: any; }) => role._id);
      return data;
    },
    async validate(): Promise<boolean> {
      const form = this.$refs.form as HTMLFormElement;
      const { valid } = await form.validate();
      return valid;
    },
    getRoles(){
        roleService.getAll().then((response: any) => {
          const rolesArray = Array.from(response);
          rolesArray.forEach((role, index) => this.roles.push(role));
        })
        .catch((error: any) => {
          console.error('Error fetching user data:', error);
        });
    }
  },
  mounted() {
      this.getRoles();
  },
});
