<template>
  <div class="app-container">
    <el-form :model="queryParams" ref="queryForm" :inline="true" v-show="showSearch" label-width="auto">
      <el-form-item label="归属登录用户主键" prop="merchId">
        <el-input
          v-model="queryParams.merchId"
          placeholder="请输入归属登录用户主键"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="法人证件照正面" prop="legalPersonPositive">
        <el-input
          v-model="queryParams.legalPersonPositive"
          placeholder="请输入法人证件照正面"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="法人证件照反面" prop="legalPersonBack">
        <el-input
          v-model="queryParams.legalPersonBack"
          placeholder="请输入法人证件照反面"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="法人姓名" prop="legalPersonName">
        <el-input
          v-model="queryParams.legalPersonName"
          placeholder="请输入法人姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="法人身份证件号码" prop="legalPersonIdcard">
        <el-input
          v-model="queryParams.legalPersonIdcard"
          placeholder="请输入法人身份证件号码"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="法人证件到期日" prop="legalPersonDuedate">
        <el-input
          v-model="queryParams.legalPersonDuedate"
          placeholder="请输入法人证件到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="企业银行账号类型" prop="entAccountType">
        <el-select v-model="queryParams.entAccountType" placeholder="请选择企业银行账号类型" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="是否法人结算" prop="legalPersonSettle">
        <el-input
          v-model="queryParams.legalPersonSettle"
          placeholder="请输入是否法人结算"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开户地区" prop="entAccountRegion">
        <el-input
          v-model="queryParams.entAccountRegion"
          placeholder="请输入开户地区"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开户账号" prop="entAccount">
        <el-input
          v-model="queryParams.entAccount"
          placeholder="请输入开户账号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开户行" prop="entAccountBank">
        <el-input
          v-model="queryParams.entAccountBank"
          placeholder="请输入开户行"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="开户人姓名" prop="entAccountName">
        <el-input
          v-model="queryParams.entAccountName"
          placeholder="请输入开户人姓名"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="银行预留手机号" prop="entAccountMobile">
        <el-input
          v-model="queryParams.entAccountMobile"
          placeholder="请输入银行预留手机号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="结算卡照片" prop="entAccountCardpic">
        <el-input
          v-model="queryParams.entAccountCardpic"
          placeholder="请输入结算卡照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="营业执照类型" prop="entLicenseType">
        <el-select v-model="queryParams.entLicenseType" placeholder="请选择营业执照类型" clearable size="small">
          <el-option label="请选择字典生成" value="" />
        </el-select>
      </el-form-item>
      <el-form-item label="营业执照编号" prop="entLicenseCode">
        <el-input
          v-model="queryParams.entLicenseCode"
          placeholder="请输入营业执照编号"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="营业执照到期日" prop="entLicenseDuedate">
        <el-input
          v-model="queryParams.entLicenseDuedate"
          placeholder="请输入营业执照到期日"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="营业执照照片正面" prop="entLicensePositive">
        <el-input
          v-model="queryParams.entLicensePositive"
          placeholder="请输入营业执照照片正面"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="营业执照照片背面" prop="entLicenseBack">
        <el-input
          v-model="queryParams.entLicenseBack"
          placeholder="请输入营业执照照片背面"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所一照片" prop="entPositionPic1">
        <el-input
          v-model="queryParams.entPositionPic1"
          placeholder="请输入经营场所一照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所二照片" prop="entPositionPic2">
        <el-input
          v-model="queryParams.entPositionPic2"
          placeholder="请输入经营场所二照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所三照片" prop="entPositionPic3">
        <el-input
          v-model="queryParams.entPositionPic3"
          placeholder="请输入经营场所三照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所四照片" prop="entPositionPic4">
        <el-input
          v-model="queryParams.entPositionPic4"
          placeholder="请输入经营场所四照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所四照片" prop="var1">
        <el-input
          v-model="queryParams.var1"
          placeholder="请输入经营场所四照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所四照片" prop="var2">
        <el-input
          v-model="queryParams.var2"
          placeholder="请输入经营场所四照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所四照片" prop="var3">
        <el-input
          v-model="queryParams.var3"
          placeholder="请输入经营场所四照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所四照片" prop="var4">
        <el-input
          v-model="queryParams.var4"
          placeholder="请输入经营场所四照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item label="经营场所四照片" prop="var5">
        <el-input
          v-model="queryParams.var5"
          placeholder="请输入经营场所四照片"
          clearable
          size="small"
          @keyup.enter.native="handleQuery"
        />
      </el-form-item>
      <el-form-item>
        <el-button type="primary" icon="el-icon-search" size="mini" @click="handleQuery">搜索</el-button>
        <el-button icon="el-icon-refresh" size="mini" @click="resetQuery">重置</el-button>
      </el-form-item>
    </el-form>

    <el-row :gutter="10" class="mb8">
      <el-col :span="1.5">
        <el-button
          type="primary"
		  plain
          icon="el-icon-plus"
          size="mini"
          @click="handleAdd"
          v-hasPermi="['merchant:enterprise:add']"
        >新增</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="success"
		  plain
          icon="el-icon-edit"
          size="mini"
          :disabled="single"
          @click="handleUpdate"
          v-hasPermi="['merchant:enterprise:edit']"
        >修改</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="danger"
		  plain
          icon="el-icon-delete"
          size="mini"
          :disabled="multiple"
          @click="handleDelete"
          v-hasPermi="['merchant:enterprise:remove']"
        >删除</el-button>
      </el-col>
      <el-col :span="1.5">
        <el-button
          type="warning"
		  plain
          icon="el-icon-download"
          size="mini"
          @click="handleExport"
          v-hasPermi="['merchant:enterprise:export']"
        >导出</el-button>
      </el-col>
      <right-toolbar :showSearch.sync="showSearch" @queryTable="getList"></right-toolbar>
    </el-row>

    <el-table v-loading="loading" :data="enterpriseList" @selection-change="handleSelectionChange">
      <el-table-column type="selection" width="55" align="center" />
      <el-table-column label="商户主键" align="center" prop="entId" v-if="false"/>
      <el-table-column label="归属登录用户主键" align="center" prop="merchId" />
      <el-table-column label="法人证件照正面" align="center" prop="legalPersonPositive" />
      <el-table-column label="法人证件照反面" align="center" prop="legalPersonBack" />
      <el-table-column label="法人姓名" align="center" prop="legalPersonName" />
      <el-table-column label="法人身份证件号码" align="center" prop="legalPersonIdcard" />
      <el-table-column label="法人证件到期日" align="center" prop="legalPersonDuedate" />
      <el-table-column label="企业银行账号类型" align="center" prop="entAccountType" />
      <el-table-column label="是否法人结算" align="center" prop="legalPersonSettle" />
      <el-table-column label="开户地区" align="center" prop="entAccountRegion" />
      <el-table-column label="开户账号" align="center" prop="entAccount" />
      <el-table-column label="开户行" align="center" prop="entAccountBank" />
      <el-table-column label="开户人姓名" align="center" prop="entAccountName" />
      <el-table-column label="银行预留手机号" align="center" prop="entAccountMobile" />
      <el-table-column label="结算卡照片" align="center" prop="entAccountCardpic" />
      <el-table-column label="营业执照类型" align="center" prop="entLicenseType" />
      <el-table-column label="营业执照编号" align="center" prop="entLicenseCode" />
      <el-table-column label="营业执照到期日" align="center" prop="entLicenseDuedate" />
      <el-table-column label="营业执照照片正面" align="center" prop="entLicensePositive" />
      <el-table-column label="营业执照照片背面" align="center" prop="entLicenseBack" />
      <el-table-column label="经营场所一照片" align="center" prop="entPositionPic1" />
      <el-table-column label="经营场所二照片" align="center" prop="entPositionPic2" />
      <el-table-column label="经营场所三照片" align="center" prop="entPositionPic3" />
      <el-table-column label="经营场所四照片" align="center" prop="entPositionPic4" />
      <el-table-column label="经营场所四照片" align="center" prop="var1" />
      <el-table-column label="经营场所四照片" align="center" prop="var2" />
      <el-table-column label="经营场所四照片" align="center" prop="var3" />
      <el-table-column label="经营场所四照片" align="center" prop="var4" />
      <el-table-column label="经营场所四照片" align="center" prop="var5" />
      <el-table-column label="操作" align="center" class-name="small-padding fixed-width">
        <template slot-scope="scope">
          <el-button
            size="mini"
            type="text"
            icon="el-icon-edit"
            @click="handleUpdate(scope.row)"
            v-hasPermi="['merchant:enterprise:edit']"
          >修改</el-button>
          <el-button
            size="mini"
            type="text"
            icon="el-icon-delete"
            @click="handleDelete(scope.row)"
            v-hasPermi="['merchant:enterprise:remove']"
          >删除</el-button>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total>0"
      :total="total"
      :page.sync="queryParams.pageNum"
      :limit.sync="queryParams.pageSize"
      @pagination="getList"
    />

    <!-- 添加或修改企业商户报件信息对话框 -->
    <el-dialog :title="title" :visible.sync="open" width="500px" append-to-body>
      <el-form ref="form" :model="form" :rules="rules" label-width="80px">
        <el-form-item label="归属登录用户主键" prop="merchId">
          <el-input v-model="form.merchId" placeholder="请输入归属登录用户主键" />
        </el-form-item>
        <el-form-item label="法人证件照正面" prop="legalPersonPositive">
          <el-input v-model="form.legalPersonPositive" placeholder="请输入法人证件照正面" />
        </el-form-item>
        <el-form-item label="法人证件照反面" prop="legalPersonBack">
          <el-input v-model="form.legalPersonBack" placeholder="请输入法人证件照反面" />
        </el-form-item>
        <el-form-item label="法人姓名" prop="legalPersonName">
          <el-input v-model="form.legalPersonName" placeholder="请输入法人姓名" />
        </el-form-item>
        <el-form-item label="法人身份证件号码" prop="legalPersonIdcard">
          <el-input v-model="form.legalPersonIdcard" placeholder="请输入法人身份证件号码" />
        </el-form-item>
        <el-form-item label="法人证件到期日" prop="legalPersonDuedate">
          <el-input v-model="form.legalPersonDuedate" placeholder="请输入法人证件到期日" />
        </el-form-item>
        <el-form-item label="企业银行账号类型" prop="entAccountType">
          <el-select v-model="form.entAccountType" placeholder="请选择企业银行账号类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="是否法人结算" prop="legalPersonSettle">
          <el-input v-model="form.legalPersonSettle" placeholder="请输入是否法人结算" />
        </el-form-item>
        <el-form-item label="开户地区" prop="entAccountRegion">
          <el-input v-model="form.entAccountRegion" placeholder="请输入开户地区" />
        </el-form-item>
        <el-form-item label="开户账号" prop="entAccount">
          <el-input v-model="form.entAccount" placeholder="请输入开户账号" />
        </el-form-item>
        <el-form-item label="开户行" prop="entAccountBank">
          <el-input v-model="form.entAccountBank" placeholder="请输入开户行" />
        </el-form-item>
        <el-form-item label="开户人姓名" prop="entAccountName">
          <el-input v-model="form.entAccountName" placeholder="请输入开户人姓名" />
        </el-form-item>
        <el-form-item label="银行预留手机号" prop="entAccountMobile">
          <el-input v-model="form.entAccountMobile" placeholder="请输入银行预留手机号" />
        </el-form-item>
        <el-form-item label="结算卡照片" prop="entAccountCardpic">
          <el-input v-model="form.entAccountCardpic" placeholder="请输入结算卡照片" />
        </el-form-item>
        <el-form-item label="营业执照类型" prop="entLicenseType">
          <el-select v-model="form.entLicenseType" placeholder="请选择营业执照类型">
            <el-option label="请选择字典生成" value="" />
          </el-select>
        </el-form-item>
        <el-form-item label="营业执照编号" prop="entLicenseCode">
          <el-input v-model="form.entLicenseCode" placeholder="请输入营业执照编号" />
        </el-form-item>
        <el-form-item label="营业执照到期日" prop="entLicenseDuedate">
          <el-input v-model="form.entLicenseDuedate" placeholder="请输入营业执照到期日" />
        </el-form-item>
        <el-form-item label="营业执照照片正面" prop="entLicensePositive">
          <el-input v-model="form.entLicensePositive" placeholder="请输入营业执照照片正面" />
        </el-form-item>
        <el-form-item label="营业执照照片背面" prop="entLicenseBack">
          <el-input v-model="form.entLicenseBack" placeholder="请输入营业执照照片背面" />
        </el-form-item>
        <el-form-item label="经营场所一照片" prop="entPositionPic1">
          <el-input v-model="form.entPositionPic1" placeholder="请输入经营场所一照片" />
        </el-form-item>
        <el-form-item label="经营场所二照片" prop="entPositionPic2">
          <el-input v-model="form.entPositionPic2" placeholder="请输入经营场所二照片" />
        </el-form-item>
        <el-form-item label="经营场所三照片" prop="entPositionPic3">
          <el-input v-model="form.entPositionPic3" placeholder="请输入经营场所三照片" />
        </el-form-item>
        <el-form-item label="经营场所四照片" prop="entPositionPic4">
          <el-input v-model="form.entPositionPic4" placeholder="请输入经营场所四照片" />
        </el-form-item>
        <el-form-item label="经营场所四照片" prop="var1">
          <el-input v-model="form.var1" placeholder="请输入经营场所四照片" />
        </el-form-item>
        <el-form-item label="经营场所四照片" prop="var2">
          <el-input v-model="form.var2" placeholder="请输入经营场所四照片" />
        </el-form-item>
        <el-form-item label="经营场所四照片" prop="var3">
          <el-input v-model="form.var3" placeholder="请输入经营场所四照片" />
        </el-form-item>
        <el-form-item label="经营场所四照片" prop="var4">
          <el-input v-model="form.var4" placeholder="请输入经营场所四照片" />
        </el-form-item>
        <el-form-item label="经营场所四照片" prop="var5">
          <el-input v-model="form.var5" placeholder="请输入经营场所四照片" />
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button type="primary" @click="submitForm">确 定</el-button>
        <el-button @click="cancel">取 消</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { listEnterprise, getEnterprise, delEnterprise, addEnterprise, updateEnterprise, exportEnterprise } from "@/api/merchant/enterprise";

export default {
  name: "Enterprise",
  components: {
  },
  data() {
    return {
      // 遮罩层
      loading: true,
      // 选中数组
      ids: [],
      // 非单个禁用
      single: true,
      // 非多个禁用
      multiple: true,
      // 显示搜索条件
      showSearch: true,
      // 总条数
      total: 0,
      // 企业商户报件信息表格数据
      enterpriseList: [],
      // 弹出层标题
      title: "",
      // 是否显示弹出层
      open: false,
      // 查询参数
      queryParams: {
        pageNum: 1,
        pageSize: 10,
        merchId: undefined,
        legalPersonPositive: undefined,
        legalPersonBack: undefined,
        legalPersonName: undefined,
        legalPersonIdcard: undefined,
        legalPersonDuedate: undefined,
        entAccountType: undefined,
        legalPersonSettle: undefined,
        entAccountRegion: undefined,
        entAccount: undefined,
        entAccountBank: undefined,
        entAccountName: undefined,
        entAccountMobile: undefined,
        entAccountCardpic: undefined,
        entLicenseType: undefined,
        entLicenseCode: undefined,
        entLicenseDuedate: undefined,
        entLicensePositive: undefined,
        entLicenseBack: undefined,
        entPositionPic1: undefined,
        entPositionPic2: undefined,
        entPositionPic3: undefined,
        entPositionPic4: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined
      },
      // 表单参数
      form: {},
      // 表单校验
      rules: {
        merchId: [
          { required: true, message: "归属登录用户主键不能为空", trigger: "blur" }
        ],
      }
    };
  },
  created() {
    this.getList();
  },
  methods: {
    /** 查询企业商户报件信息列表 */
    getList() {
      this.loading = true;
      listEnterprise(this.queryParams).then(response => {
        this.enterpriseList = response.rows;
        this.total = response.total;
        this.loading = false;
      });
    },
    // 取消按钮
    cancel() {
      this.open = false;
      this.reset();
    },
    // 表单重置
    reset() {
      this.form = {
        entId: undefined,
        merchId: undefined,
        legalPersonPositive: undefined,
        legalPersonBack: undefined,
        legalPersonName: undefined,
        legalPersonIdcard: undefined,
        legalPersonDuedate: undefined,
        entAccountType: undefined,
        legalPersonSettle: undefined,
        entAccountRegion: undefined,
        entAccount: undefined,
        entAccountBank: undefined,
        entAccountName: undefined,
        entAccountMobile: undefined,
        entAccountCardpic: undefined,
        entLicenseType: undefined,
        entLicenseCode: undefined,
        entLicenseDuedate: undefined,
        entLicensePositive: undefined,
        entLicenseBack: undefined,
        entPositionPic1: undefined,
        entPositionPic2: undefined,
        entPositionPic3: undefined,
        entPositionPic4: undefined,
        createBy: undefined,
        createTime: undefined,
        updateBy: undefined,
        updateTime: undefined,
        var1: undefined,
        var2: undefined,
        var3: undefined,
        var4: undefined,
        var5: undefined
      };
      this.resetForm("form");
    },
    /** 搜索按钮操作 */
    handleQuery() {
      this.queryParams.pageNum = 1;
      this.getList();
    },
    /** 重置按钮操作 */
    resetQuery() {
      this.resetForm("queryForm");
      this.handleQuery();
    },
    // 多选框选中数据
    handleSelectionChange(selection) {
      this.ids = selection.map(item => item.entId)
      this.single = selection.length!==1
      this.multiple = !selection.length
    },
    /** 新增按钮操作 */
    handleAdd() {
      this.reset();
      this.open = true;
      this.title = "添加企业商户报件信息";
    },
    /** 修改按钮操作 */
    handleUpdate(row) {
      this.reset();
      const entId = row.entId || this.ids
      getEnterprise(entId).then(response => {
        this.form = response.data;
        this.open = true;
        this.title = "修改企业商户报件信息";
      });
    },
    /** 提交按钮 */
    submitForm() {
      this.$refs["form"].validate(valid => {
        if (valid) {
          if (this.form.entId != null) {
            updateEnterprise(this.form).then(response => {
              this.msgSuccess("修改成功");
              this.open = false;
              this.getList();
            });
          } else {
            addEnterprise(this.form).then(response => {
              this.msgSuccess("新增成功");
              this.open = false;
              this.getList();
            });
          }
        }
      });
    },
    /** 删除按钮操作 */
    handleDelete(row) {
      const entIds = row.entId || this.ids;
      this.$confirm('是否确认删除企业商户报件信息编号为"' + entIds + '"的数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return delEnterprise(entIds);
        }).then(() => {
          this.getList();
          this.msgSuccess("删除成功");
        })
    },
    /** 导出按钮操作 */
    handleExport() {
      const queryParams = this.queryParams;
      this.$confirm('是否确认导出所有企业商户报件信息数据项?', "警告", {
          confirmButtonText: "确定",
          cancelButtonText: "取消",
          type: "warning"
        }).then(function() {
          return exportEnterprise(queryParams);
        }).then(response => {
          this.download(response.msg);
        })
    }
  }
};
</script>
