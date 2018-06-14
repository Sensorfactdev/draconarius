<a name="Draconarius"></a>

## Draconarius
**Kind**: global class  

* [Draconarius](#Draconarius)
    * _instance_
        * [.isEnabled(flag, ...args)](#Draconarius+isEnabled) ⇒ <code>boolean</code>
        * [.updateFlag(flag, value)](#Draconarius+updateFlag)
    * _static_
        * [.Draconarius](#Draconarius.Draconarius)
            * [new Draconarius(flags)](#new_Draconarius.Draconarius_new)
        * [.version()](#Draconarius.version) ⇒ <code>string</code>

<a name="Draconarius+isEnabled"></a>

### draconarius.isEnabled(flag, ...args) ⇒ <code>boolean</code>
isEnabled - To check if a flag is raised(enabled)

**Kind**: instance method of [<code>Draconarius</code>](#Draconarius)  
**Returns**: <code>boolean</code> - A boolean indicating if flag is enabled  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>string</code> \| <code>array</code> | The flag or flags you want to check |
| ...args | <code>array</code> | optional arguments to pass to a flag function |

<a name="Draconarius+updateFlag"></a>

### draconarius.updateFlag(flag, value)
updateFlag

**Kind**: instance method of [<code>Draconarius</code>](#Draconarius)  

| Param | Type | Description |
| --- | --- | --- |
| flag | <code>string</code> \| <code>array</code> | The flag or flags you want to check |
| value | <code>function</code> \| <code>boolean</code> |  |

<a name="Draconarius.Draconarius"></a>

### Draconarius.Draconarius
**Kind**: static class of [<code>Draconarius</code>](#Draconarius)  
<a name="new_Draconarius.Draconarius_new"></a>

#### new Draconarius(flags)
Creates an instance of Draconarius.


| Param | Type |
| --- | --- |
| flags | <code>object</code> | 

<a name="Draconarius.version"></a>

### Draconarius.version() ⇒ <code>string</code>
version - Checks the version in package.json

**Kind**: static method of [<code>Draconarius</code>](#Draconarius)  
**Returns**: <code>string</code> - Current version of Draconarius  
