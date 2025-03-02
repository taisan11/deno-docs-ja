# インストール

Deno は macOS、Linux、Windows で動作します。 Deno は単一のバイナリ実行可能ファイルです。
外部依存関係はありません。 macOS では、M1 (arm64) と Intel (x64) の両方の
実行可能ファイルが提供されます。 Linux および Windows では、x64 のみがサポートされます。

## downloadとinstall

[deno_install](https://github.com/denoland/deno_install) 利便性を提供する
バイナリをダウンロードしてインストールするためのスクリプト。

import Tabs from '@theme/Tabs'; import TabItem from '@theme/TabItem';

<Tabs groupId="operating-systems">
  <TabItem value="mac" label="macOS" default>

Using Shell:

```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using [Homebrew](https://formulae.brew.sh/formula/deno):

```shell
brew install deno
```

Using [MacPorts](https://ports.macports.org/port/deno/):

```shell
sudo port install deno
```

Using [Nix](https://nixos.org/download.html):

```shell
nix-shell -p deno
```

Using [asdf](https://asdf-vm.com/):

```shell
asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git
asdf install deno latest

# To install globally
asdf global deno latest

# To install locally (current project only)
asdf local deno latest
```

</TabItem>
  <TabItem  value="windows" label="Windows">

Using PowerShell (Windows):

```powershell
irm https://deno.land/install.ps1 | iex
```

Using [Scoop](https://scoop.sh/):

```shell
scoop install deno
```

Using [Chocolatey](https://chocolatey.org/packages/deno):

```shell
choco install deno
```

Using [Winget](https://github.com/microsoft/winget-cli):

```shell
winget install deno
```

</TabItem>
  <TabItem value="linux" label="Linux">

Using Shell:

```shell
curl -fsSL https://deno.land/x/install/install.sh | sh
```

Using [Nix](https://nixos.org/download.html):

```shell
nix-shell -p deno
```

Using [asdf](https://asdf-vm.com/):

```shell
asdf plugin-add deno https://github.com/asdf-community/asdf-deno.git
asdf install deno latest

# To install globally
asdf global deno latest

# To install locally (current project only)
asdf local deno latest
```

</TabItem>
</Tabs>

ソースからビルドしてインストールすることもできます
[Cargo](https://crates.io/crates/deno):

```shell
cargo install deno --locked
```

Deno バイナリは、zip ファイルをダウンロードして手動でインストールすることもできます。
[github.com/denoland/deno/releases](https://github.com/denoland/deno/releases).
これらのパッケージには、実行可能ファイルが 1 つだけ含まれています。を設定する必要があります。
macOS および Linux 上の実行可能ビット。

## Docker

公式 Docker イメージの詳細と手順については、こちらをご覧ください。:
[https://github.com/denoland/deno_docker](https://github.com/denoland/deno_docker)

## Testing your installation

To test your installation, run `deno --version`. If this prints the Deno version
to the console the installation was successful.

Use `deno help` to see help text documenting Deno's flags and usage. Get a
detailed guide on the CLI [here](./command_line_interface.md).

## Updating

To update a previously installed version of Deno, you can run:

```shell
deno upgrade
```

Or using [Winget](https://github.com/microsoft/winget-cli) (Windows):

```shell
winget upgrade deno
```

This will fetch the latest release from
[github.com/denoland/deno/releases](https://github.com/denoland/deno/releases),
unzip it, and replace your current executable with it.

You can also use this utility to install a specific version of Deno:

```shell
deno upgrade --version 1.0.1
```

## Building from source

Information about how to build from source can be found in the
[`Contributing`](../references/contributing/building_from_source.md) chapter.
