export const LANGUAGE_VERSIONS = {
  javascript: "18.15.0",
  typescript: "5.0.3",
  python: "3.10.0",
  java: "15.0.2",
  csharp: "6.12.0",
  php: "8.2.3",
};

export const CODE_SNIPPETS = {
  javascript: `\nfunction greet(msg) {\n\tconsole.log(msg);\n}\n\ngreet("Vanakam");\n`,
  typescript: `\ntype Params = {\n\tmsg: string;\n}\n\nfunction greet(data: Params) {\n\tconsole.log(data.msg);\n}\n\ngreet({ msg: "Vanakam" });\n`,
  python: `\ndef greet(msg):\n\tprint(msg)\n\ngreet("Vanakam")\n`,
  java: `\npublic class Main {\n\tpublic static void main(String[] args) {\n\t\tSystem.out.println("Vanakam");\n\t}\n}\n`,
  csharp:
    'using System;\n\nnamespace HelloUser\n{\n\tclass Project { \n\t\tstatic void Main(string[] args) {\n\t\t\tConsole.WriteLine("Vanakam");\n\t\t}\n\t}\n}\n',
  php: "<?php\n\n$greet = 'Vanakam';\necho $greet;\n",
};
