//把package 目录下所有包都进行打包

const fs = require('fs');
const execa = require('execa')//开启子进程 进行打包，最终还是使用rollup进行打包

const target = 'reactivity'

//对我们的目标依次打包，并行打包

build(target)
async function build(target) { //rollup -c --environment TARGET:shated
    await execa('rollup', ['-cw', '--environment', `TARGET:${target}`], { stdio: 'inherit' });//将子进程打包的信息共享给父进程
    console.log(target);
}

